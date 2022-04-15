<template>
    <div class="note-item poptip-reset">
        <template v-if="isEdit">
            <el-input
                @keydown.enter.native="keyDown"
                ref="input"
                :autosize="{ minRows: 4 }"
                type="textarea"
                :value="note.value"
                @on-change="onChange"
                style="font-size: 16px"
            />
            <div class="note-operation">
                <el-button
                    style="margin-right:8px"
                    type="primary"
                    plain
                    size="mini"
                    @click="isEdit = false"
                    >取消
                </el-button>
                <el-button size="mini" type="primary" @click="modifyNote"
                    >保存
                </el-button>
            </div>
        </template>
        <template v-else>
            <header class="note-header">
                <span @click="setCurTime">
                    {{ formatedTime }}
                </span>
                <el-popover
                    width="80"
                    trigger="click"
                    content="content"
                    placement="bottom"
                >
                    <i
                        slot="reference"
                        style="color:#fff"
                        class="el-icon-more"
                    ></i>
                    <div class="operate-warpper">
                        <li v-if="!showDate" @click="setCurTime">跳转</li>
                        <li @click="editText">编辑</li>
                        <li @click="deleteNote">删除</li>
                    </div>
                </el-popover>
            </header>
            <pre
                class="note-content"
                @dblclick="editText"
                v-html="note.value"
            ></pre>
        </template>
    </div>
</template>

<script>
import { formatVideoTime } from '../../../../tools/watch-tools'

export default {
    name: 'note-item',
    props: {
        note: {
            //{data:'',currentTime:'',date:''}
            type: Object,
            required: true
        },
        showDate: {
            type: Boolean,
            default: true
        }
    },
    components: {},
    data() {
        return {
            text: '',
            isEdit: false,
            newText: ''
        }
    },
    computed: {
        formatedTime() {
            if (this.showDate) {
                return this.note.date
            } else {
                return formatVideoTime(this.note.currentTime)
            }
        }
    },
    methods: {
        onChange(e) {
            this.newText = e.target.value
        },
        keyDown(e) {
            if (e.ctrlKey || e.metaKey) {
                this.modifyNote()
            }
        },
        editText() {
            this.isEdit = true
            this.$nextTick(() => {
                this.$refs.input.focus({
                    cursor: 'start'
                })
            })
        },
        deleteNote() {
            this.$emit('delete', { date: this.note.id })
        },
        modifyNote() {
            if (this.newText) {
                this.$emit('modify', {
                    date: this.note.id,
                    value: this.newText
                })
            }
            this.isEdit = false
        },
        setCurTime() {
            this.$emit('set-time', { currentTime: this.note.currentTime })
        }
    },
    created() {}
}
</script>

<style lang="scss" scoped>
.note-item {
    padding: 15px;
    background: $component-bg-color;
    border-radius: 6px;
    position: relative;
    margin-bottom: 10px;
    //margin: 10px;

    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }

    .note-operation {
        position: absolute;
        right: 15px;
        bottom: 5px;
    }

    textarea {
        background: $component-bg-color;
        color: $font-color;
        border: 0;
        outline: 0;
        resize: none;
        width: 100%;

        &:focus {
            border: 0;
            box-shadow: none;
        }
    }

    pre {
        background: transparent;
        border: 0;
    }
}

.note-header {
    font-size: 12px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
        cursor: pointer;
    }
}

.operate-warpper {
    width: 60px;

    li {
        list-style: none;
        cursor: pointer;
        color: $font-color-second;
        font-size: 12px;
        padding: 10px 6px;
    }

    li:hover {
        color: $--color-primary;
    }
}

.note-content {
    color: $font-color;
    white-space: break-spaces;
}
</style>
