<template>
    <section class="piano-text">
        <nav>
            <el-button type="text" @click="format">format</el-button>
            <el-button type="text" @click="copy">copy</el-button>
        </nav>
        <section>
            <el-input
                style="font-size:24px;font-family:monospace"
                v-model="str"
                type="textarea"
                :autosize="{ minRows: 10, maxRows: 50 }"
            />
        </section>
    </section>
</template>

<script>
import { copyToBoard } from '../../tools'

function splitText(str, size = 80) {
    let cur = 0
    let total = str.length
    let list = []

    let time = 1
    let times = Math.ceil(total / size)
    while (times > 0) {
        let index = str.indexOf(' ', size * time)
        if (index === -1) {
            index = total
        }
        let substr = str.slice(cur, index) //0 84   84 163  163 248
        if (substr) {
            list.push(substr)
        }
        cur = index
        time++
        times--
    }
    return list
}

export default {
    name: 'PianoText',
    data() {
        return {
            pieceSize: 50,
            str: ''
        }
    },
    computed: {},
    methods: {
        format() {
            let list = this.str.split('.')
            //去除空格
            list = list.filter(item => item)
            let newList = []

            const space = len => {
                return ' '.repeat(len)
            }
            for (let i = 0; i < list.length; i++) {
                let item = list[i]
                if (item[0] !== ' ') {
                    item = ' ' + item
                }
                if (item.length > 0) {
                    if (item.length > this.pieceSize) {
                        let list = splitText(item, this.pieceSize)
                        list.forEach((p, index) => {
                            if (index === list.length - 1) {
                                newList.push(p + '.')
                            } else {
                                newList.push(p)
                            }
                            newList.push(space(p.length))
                        })
                    } else {
                        newList.push(item + '.')
                        newList.push(space(item.length))
                    }
                }
            }
            this.str = newList.join('\n')
        },
        copy() {
            copyToBoard(this.str)
            this.$Message.success('复制成功')
        }
    },
    created() {}
}
</script>

<style lang="scss">
.piano-text {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100vh;

    > nav {
        height: 40px;
    }

    > section {
        flex: 1;
        height: 100%;
        overflow-y: auto;
    }

    .el-input input,
    .el-textarea > textarea {
        font-family: monospace;
    }
}
</style>
