export default {
    install(Vue) {
        console.log('使用插件了');
        console.log(Vue);
        // 全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 2)
        })

        // 全局指令
        Vue.directive('fbind', {
                bind(element, binding) {
                    element.value = binding.value
                },
                inserted(element, binding) {
                    element.focus()
                },
                update(element, binding) {
                    element.value = binding.value
                }
            })
            // 全局混合
        Vue.mixin({
                data() {
                    return {
                        a: 100,
                        b: 200
                    }
                },
            })
            // 全局方法
        Vue.prototype.hello = function() { console.log('hello'); }
    }
}