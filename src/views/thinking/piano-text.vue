<template>
    <section class="piano-text">
        <el-button type="text" @click="format">format</el-button>
        <el-input
            style="font-size:24px;font-family:monospace"
            v-model="str"
            type="textarea"
            :autosize="{ minRows: 10, maxRows: 50 }"
        />
    </section>
</template>

<script>
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
        list.push(substr)
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
            pieceSize: 60,
            str:
                'The right height of the bench and its distance from the piano is also a matter of personal taste. For a good starting point, sit at the bench with your elbows at your sides and forearms pointing straight towards the piano. With your hands on the keys in playing position, the elbows should be slightly below the height of the keys. Now place your hands on the white keys -- the distance of the bench from the piano (and your sitting position) should be such that the elbows just miss your body as you move them in towards each other. Do not sit at the center of the bench, but sit closer to the front edge so that you can plant your feet firmly on the floor or pedals. The bench height and location are most critical when playing loud chords. Therefore, you can test this position by playing two black key chords simultaneously, as loudly as you can. The chords are C2#G2#C3# (5,2,1) for the left hand and C5#G5#C6# (1,2,5) for the right hand. Press down hard, leaning forwards a little, with the whole weight of your arms and shoulders, to make a thundering, authoritative sound. Make sure that the shoulders are totally involved. Loud, impressive sounds cannot be made using only the hands and forearms; the force must come from the shoulders and the body. If this is comfortable, the bench and sitting positions should be correct. Historically, there has been a tendency of teachers to sit their students too high; consequently, the standard bench height of fixed height benches tend to be one to two inches too high, thus forcing the students to play more with their fingertips than the front finger pads. It is therefore important to have a bench with variable height.'
        }
    },
    computed: {},
    methods: {
        format() {
            let list = this.str.split('.')
            let newList = []

            const space = len => {
                return ' '.repeat(len)
            }
            for (let i = 0; i < list.length; i++) {
                let item = list[i]
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
        }
    },
    created() {}
}
</script>

<style lang="scss">
.piano-text {
    .el-input input,
    .el-textarea > textarea {
        font-family: monospace;
        white-space: nowrap;
    }
}
</style>
