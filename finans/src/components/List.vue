<template>
    <div class="list">
        <div class="container">
            <div class="categories">
                <div class="categories-header">
                    <h3 v-for="item in categories" class="categories-title">{{item}}</h3>
                </div>
                <hr>
                <div v-for="item in costs" class="categories-item">
                    <h3 class="categories-title">{{item.id}}</h3>
                    <h3 class="categories-title">{{item.date}}</h3>
                    <h3 class="categories-title">{{item.category}}</h3>
                    <h3 class="categories-title">{{item.value}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            categories: ['id', 'Date', 'Category', 'Value']
        }
    },
    props: {
        costs: Array
    }

}
</script>

<style lang="less">
.list {
    width: 100%;
    max-width: 1920px;
}

.categories {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.categories-header {
    display: flex;
    justify-content: space-between;
}

.categories-line {
    height: 1px;
    width: 100%;
    color: #444;
}

.categories-item {
    margin-top: 15px;
    .categories-header()
}
</style>