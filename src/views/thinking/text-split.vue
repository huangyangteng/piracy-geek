<template>
    <section class="text-split">
        <aside>
            <h2>english</h2>
            <el-input
                v-model="enStr"
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 30 }"
            />
            <h2>chinese</h2>
            <el-input
                v-model="chStr"
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 30 }"
            />
        </aside>
        <main>
            <h2 @click="copy">output</h2>
            <el-input
                v-model="output"
                type="textarea"
                :autosize="{ minRows: 22, maxRows: 50 }"
            />
        </main>
    </section>
</template>

<script>
import { copyToBoard } from '../../tools'

function getNewStr(strEnglish, strChinese) {
    strEnglish = strEnglish.replace(/\n/g, '')
    strChinese = strChinese.replace(/\n/g, '')
    let en = strEnglish.split('.')
    let ch = strChinese.split('。')

    let list = []
    for (let i = 0; i < en.length; i++) {
        list.push(ch[i] + '\n' + en[i])
        list.push()
    }

    let newStr = list.join(' \n\n ')
    console.log('😅😅😅', newStr)
    return newStr
}

export default {
    name: 'text-splite',
    data() {
        return {
            enStr: ``,
            chStr: ``
        }
    },
    computed: {
        output() {
            if (!this.enStr) return ''
            if (!this.chStr) return ''
            return getNewStr(this.enStr, this.chStr)
        }
    },
    methods: {
        copy() {
            copyToBoard(this.output)
            this.$Message.success('复制成功')
        }
    },
    created() {}
}
</script>

<style lang="scss">
.text-split {
    display: flex;
    padding: 20px;
    height: 100vh;

    > aside {
        flex: 1;
        margin-right: 20px;
        height: 100%;
        overflow-y: auto;
    }

    > main {
        flex: 1;
        height: 100%;
        overflow-y: auto;
    }

    textarea {
        background: $component-bg-color;
    }
}
</style>
