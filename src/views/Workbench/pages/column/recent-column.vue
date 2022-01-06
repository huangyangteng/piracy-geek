<template>
    <section class="history-wrapper">
        <el-timeline>
            <el-timeline-item
                v-for="item in histories"
                :key="item.itemId"
                :timestamp="item.readTime"
                placement="top"
            >
                <el-card>
                    <h4>{{ item.columnTitle }}</h4>
                    <p class="last-read-title" @click="toArticle(item)">
                        上次读到：{{ item.articleTitle }}
                    </p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </section>
</template>

<script>
import { HISTORY_API } from '../../../../api/history'
import { mapGetters } from 'vuex'
import { formatHistory } from '../../../../tools/history-tools'
import { SEARCH_TYPE } from '../../../../data/search'

export default {
    name: 'recent-column',
    data() {
        return {
            histories: []
        }
    },
    computed: {
        ...mapGetters('user', ['userId'])
    },
    methods: {
        async getHistory() {
            const res = await HISTORY_API.query({
                userId: this.userId,
                type: SEARCH_TYPE.COLUMN
            })
            if (res.code === 2000) {
                this.histories = formatHistory(res.data)
            }
        },
        toArticle(item) {
            this.$router.push({
                name: 'read',
                params: {
                    column: item.itemId,
                    article: item.articleId
                }
            })
        }
    },
    created() {
        this.getHistory()
    }
}
</script>

<style lang="scss" scoped>
.history-wrapper {
    margin: 40px auto;
    width: 1200px;
}

.column-item {
    background: $component-bg-color;
    padding: 16px;
    width: 400px;
    border-radius: 8px;

    .column-progress {
        display: flex;
        margin: 8px 0;

        > span {
            font-size: 13px;
        }

        .el-progress {
            width: 120px;
            margin-left: 10px;
        }
    }

    p {
        opacity: 0.8;

        &:hover {
            color: $--color-primary;
            cursor: pointer;
        }
    }
}

.last-read-title {
    cursor: pointer;
    margin-top: 8px;

    &:hover {
        color: $--color-primary;
        cursor: pointer;
    }
}
</style>