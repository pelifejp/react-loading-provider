# react-loading-provider

WIP

```typescript jsx
export default function App() {
  return (
    <LoadingProvider>
      <Component />
    </LoadingProvider>
  )
}

function Component() {
  const { show, hide } = useLoading()
  
  const handleClick = () => {
    show()
    
    setTimeout(() => {
      hide()
    }, 1000)
  }
  
  return (
    <div>
      <button onClick={handleClick}>Loading</button>
    </div>
  )
}
```
