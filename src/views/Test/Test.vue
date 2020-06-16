<template>
    <section class="test-wrapper">
        <aside :style="{ width: dragAside.left + 'px' }">2222</aside>
        <div
            class="drag-aside"
            :style="dragAsideStyle"
            @mousedown="dragstart"
        ></div>
        <div class="card shadow">
            <div id="stamp">SANDBOX</div>
            <div id="sandbox" class="content">
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec luctus malesuada sagittis. Morbi purus odio, blandit
                    ac urna sed, <b>interdum pharetra</b> leo. Cras congue id
                    est sit amet mattis. Sed in metus et orci eleifend commodo.
                    Phasellus at odio imperdiet, efficitur augue in, pulvinar
                    sapien. Pellentesque leo nulla, porta non lectus eu,
                    ullamcorper semper est. Nunc <i>convallis</i> risus vel
                    mauris accumsan, in rutrum odio sodales. Vestibulum
                    <b>ante ipsum</b> primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Sed at tempus mauris. Fusce blandit
                    felis sit amet magna lacinia blandit.
                </p>
                <img class="shadow" src="assets/img.jpg" />
                <p>
                    Maecenas faucibus hendrerit lectus, in auctor felis
                    tristique at. Pellentesque a felis ut nibh malesuada auctor.
                    Ut <b>egestas elit</b> ac ultrices ullamcorper. Pellentesque
                    enim est, varius ultrices velit eget, consectetur aliquam
                    tortor. Aliquam sit amet nibh id tellus sollicitudin
                    faucibus. Nunc euismod augue tempus, ornare justo interdum,
                    consectetur lacus. Pellentesque a molestie tellus, eget
                    convallis lectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vitae nunc sed risus blandit convallis id id risus. Morbi
                    tortor metus, imperdiet sed ipsum quis, condimentum mattis
                    tellus. Fusce orci nisi, ultricies vel hendrerit id, egestas
                    id turpis. Proin cursus diam tortor, sed ullamcorper eros
                    commodo vitae. Aenean et maximus sapien. Nam felis velit,
                    ullamcorper eu turpis ut, hendrerit accumsan augue. Nulla et
                    purus sem. Ut at hendrerit purus.
                    <b>Phasellus mollis commodo</b> ante eu mollis. In nec dui
                    vel mauris lacinia vulputate id nec turpis. Aliquam
                    vestibulum, elit sit amet fringilla malesuada, quam nunc
                    eleifend nunc, id iaculis est neque pretium libero.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Lucius</td>
                            <td>j.lu@mail.com</td>
                        </tr>
                        <tr>
                            <td>Nikolai</td>
                            <td>Bodrov</td>
                            <td>niko.b@mail.com</td>
                        </tr>
                        <tr>
                            <td>Steve</td>
                            <td>Suzy</td>
                            <td>s.suzy@mail.com</td>
                        </tr>
                        <tr>
                            <td>Alex</td>
                            <td>Stirling</td>
                            <td>alexs@mail.com</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Donec sollicitudin commodo risus in consequat. Curabitur
                    ultricies sagittis mi, a dapibus nunc mollis sed. Sed ut
                    pretium leo, quis vehicula diam. Proin nisi metus, elementum
                    ut mi porttitor, cursus egestas sem. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Phasellus mattis
                    ipsum ut enim efficitur mollis. Vivamus id mollis lectus.
                </p>

                <form action="#" method="post">
                    <div>
                        <label for="first-name">First name:</label>
                        <input
                            type="text"
                            id="first-name"
                            placeholder="Enter your first name"
                        />
                    </div>

                    <div>
                        <label for="last-name">Last name:</label>
                        <input
                            type="text"
                            id="last-name"
                            placeholder="Enter your last name"
                        />
                    </div>

                    <div>
                        <label for="gender">Gender:</label>
                        <select id="gender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <input type="submit" disabled="true" value="Send" />
                </form>

                <p>
                    In est tortor, tincidunt vitae elit at, ultricies tincidunt
                    magna. Aenean suscipit ante sapien, quis sagittis felis
                    efficitur feugiat. In arcu elit, hendrerit vel varius eget,
                    elementum vitae lectus. Phasellus ut purus commodo ante
                    iaculis molestie. Integer turpis felis, pellentesque eu
                    dignissim vel, sodales vel metus. Aliquam tempus lorem odio.
                    Sed purus arcu, auctor eget sodales ac, venenatis ac velit.
                    Praesent a quam at purus varius accumsan sit amet quis
                    magna. Praesent efficitur velit quis mi posuere, ut egestas
                    elit egestas. Etiam vulputate lacus in posuere suscipit.
                    Fusce molestie sem ipsum. Phasellus consectetur, purus quis
                    auctor laoreet, elit nisi aliquet metus, et placerat nunc
                    tellus ac massa. Praesent cursus ornare nulla eu ultrices.
                </p>
                <p>我才不要和你做朋友呢</p>
            </div>
        </div>
    </section>
</template>
<script>
// import TextHighlighter from '@yi-note/text-highlighter'

export default {
    data() {
        return {
            dragAside: {
                isMoving: false,
                left: 420,
                lastLeft: 0
            }
        }
    },
    computed: {
        dragAsideStyle() {
            return {
                left: this.dragAside.left + 'px'
            }
        }
    },
    methods: {
        dragstart(e) {
            this.dragAside.lastLeft = e.clientX
            this.dragAside.isMoving = true
            console.log(this.dragAside)
        },
        drag(e) {
            if (this.dragAside.isMoving) {
                let dis = e.clientX - this.dragAside.lastLeft
                let left = this.dragAside.lastLeft + dis
                if (left < 200) {
                    left = 200
                } else if (left > 800) {
                    left = 800
                }
                this.dragAside.left = left
            }
        }
    },
    mounted() {
        document.addEventListener('mousemove', e => {
            this.drag(e)
        })
        document.addEventListener('mouseup', () => {
            this.dragAside.isMoving = false
        })
        var sandbox = document.getElementById('sandbox')
        var hltr = new window.TextHighlighter(sandbox)
        console.log('mounted -> hltr', hltr)
    }
}
</script>
<style lang="scss" scoped>
.drag-aside {
    width: 2px;
    cursor: col-resize;
    position: absolute;
    height: 100%;
    background: red;
    z-index: 1;
    border: 4px solid transparent;
    background-clip: padding-box;
}
.test-wrapper {
    display: flex;
    height: 100%;
    overflow: hidden;
    > aside {
        width: 420px;
        min-width: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        border-right: 1px solid #e2e2e2;
        height: 100%;
        position: relative;
    }
    > section {
        flex: 1;
    }
}
</style>
