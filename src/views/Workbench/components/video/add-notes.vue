<template>
    <div class="add-note-wrapper">
        <Input
            @keydown.enter.native="keyDown"
            ref="input"
            autosize
            type="textarea"
            v-model="text"
        /><br />
        <Button size="small" type="primary" @click="emitAddNote"
            >添加笔记
        </Button>
    </div>
</template>

<script>
// 主题色：两个主题色变量
import hotkeys from 'hotkeys-js'

export default {
    name: 'add-notes',
    data() {
        return {
            text: ''
        }
    },
    computed: {},
    methods: {
        keyDown(e) {
            if (e.ctrlKey || e.metaKey) {
                this.emitAddNote()
            }
        },
        emitAddNote() {
            if (this.text) {
                this.$emit('add', this.text)
                setTimeout(() => {
                    this.text = ''
                }, 1000)
            }
        },
        focusTest() {
            this.$nextTick(() => {
                this.$refs.input.focus({
                    cursor: 'start'
                })
            })
        }
    },
    mounted() {
        hotkeys('ctrl+alt+m', e => {
            e.preventDefault()
            this.focusTest()
        })

        this.focusTest()
    },
    beforeDestroy() {
        hotkeys.unbind('ctrl+alt+m')
    }
}
</script>

<style lang="scss">
.add-note-wrapper {
    text-align: right;
    background: $component-bg-color;
    border-radius: 6px;
    margin: 10px;
    padding: 5px;
    margin-bottom: 15px;

    > button {
        // transform: translate(-3px, -8px);
    }
}
</style>
<style lang="scss">
.add-note-wrapper {
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
}
</style>