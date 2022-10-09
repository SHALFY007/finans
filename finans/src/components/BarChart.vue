<template>
    <v-row>
        <v-col>
            <canvas id="myChart" width="400" height="400"></canvas>
        </v-col>
    </v-row>


</template>

<script>
import Chart from 'chart.js/auto'
export default {
    props: {
        category: Array
    },
    data() {
        return {

        }
    },
    computed: {
        setCategory() {
            return [...new Set(this.category)]
        },
        mostSize() {
            let a = {}
            for (let i of this.category) {
                if (a[i] == 1) {
                    a[i] = 2
                } else { a[i] = 1 }

            }
            return a
        }
    },
    mounted() {
        console.log(this.mostSize)
        console.log(this.mostSize.Food)
        console.log(this.setCategory)
        console.log('Mounted')
        const ctx = document.getElementById('myChart');
        const data = {
            labels: this.setCategory,
            datasets: [{
                label: 'My First Dataset',
                data: Object.values(this.mostSize),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(81, 0, 0)',
                    'rgb(81, 236, 0)',
                    'rgb(81, 236, 191)'
                ],
                hoverOffset: 4
            }]
        };
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
        });

    }
}


</script>

<style leng="less">
#myChart {
    width: 400px !important;
    height: 400px !important;
    margin: 0 auto;
}
</style>
