export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('mixin的mounted');
    },
}

export const mixin2 = {
    data() {
        return {
            a: 100,
            b: 200
        }
    },
}