<template>
    <section>
        <el-popover placement="left" width="400" trigger="click">
            <el-input
                type="textarea"
                :rows="12"
                placeholder="请输入笔记"
                v-model="textarea"
                @blur="saveNote"
            >
            </el-input>
            <el-button
                @click="saveNote"
                style="margin-top:10px;display:block;margin-left:auto"
                >保存</el-button
            >
            <div class="add-note" slot="reference">+</div>
        </el-popover>
    </section>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import { LAST_READ } from '../../../store/mutation-types'
// 改变内容->提交mutation->更新数据
export default {
    data() {
        return {
            textarea: ''
        }
    },
    computed: {
        ...mapState('column', ['curArticleId']),
        ...mapGetters('lastRead', ['getCurNote']),
        curNote() {
            return this.getCurNote(this.curArticleId)
        }
    },
    watch: {
        curNote: {
            immediate: true,
            handler(val) {
                this.textarea = val
            }
        }
    },
    methods: {
        saveNote() {
            if (this.textarea === this.curNote) return
            this.$store.commit(`lastRead/${LAST_READ.SAVE_NOTE}`, {
                articleId: this.curArticleId,
                note: this.textarea
            })
            this.$Message({
                message: '保存笔记成功',
                type: 'success'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.add-note {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fa8919;
    position: absolute;
    right: 20px;
    top: 0;
    margin-top: 100px;
    cursor: pointer;
    z-index: 2;
    font-size: 28px;
    font-weight: 100;
    line-height: 40px;
    text-align: center;
    color: #fafafa;
}
</style>
