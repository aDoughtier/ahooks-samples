# ahooks

## useRequest

### 1.如何做参数管理
- 如何得到请求参数
- 如何指定初次自动请求（manual=false）的默认参数

### 2.如何有效防止闪烁
- loadingDelay

### 3.轮询注意事项

### 4.刷新自动请求
- 通过设置 options.refreshDeps，在依赖变化时， useRequest 会自动调用 refresh 方法，实现刷新（重复上一次请求）的效果
  - 会自动运行我们传递给useRequest的service，参数也会自动带上之前的，如何需要针对之前的参数做出一些处理，则可以通过写成函数的形式，获取最新的参数值
    ```js
      const [userId, setUserId] = useState('1');
      const { data, run } = useRequest(() => getUserSchool(userId), {
        refreshDeps: [userId],
      });
    ```
  
## useMemoizedFn
- useMemoizedFn 返回的函数没有继承 fn 自身的属性？
useMemoizedFn 返回的函数与传入的 fn 的引用完全不同，且没有继承 fn 自身的属性。如果想要持久化后函数自身的属性不丢失，目前 useMemoizedFn 满足不了，请降级使用 useCallback、useMemo。