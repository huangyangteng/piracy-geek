<template>
    <div class="note-item poptip-reset">
        <template v-if="isEdit">
            <Input
                @keydown.enter.native="keyDown"
                ref="input"
                autosize
                type="textarea"
                :value="note.value"
                @on-change="onChange"
            />
            <div style="text-align:right">
                <Button
                    style="margin-right:8px"
                    type="primary"
                    ghost
                    size="small"
                    @click="isEdit = false"
                    >取消
                </Button>
                <Button size="small" type="primary" @click="modifyNote"
                    >保存
                </Button>
            </div>
        </template>
        <template v-else>
            <header class="note-header">
                <span @click="setCurTime">
                    {{ formatedTime }}
                </span>
                <Poptip trigger="hover" content="content" placement="top">
                    <Icon style="font-size:16px" type="ios-more" />
                    <div slot="content" class="operate-warpper">
                        <li @click="setCurTime">跳转</li>
                        <li @click="editText">编辑</li>
                        <li @click="deleteNote">删除</li>
                    </div>
                </Poptip>
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
            type: Object,
            required: true
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
            return formatVideoTime(this.note.currentTime)
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
            this.$emit('delete', { date: this.note.date })
        },
        modifyNote() {
            if (this.newText) {
                this.$emit('modify', {
                    date: this.note.date,
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