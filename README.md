# react-loading-provider

![loading.gif](loading.gif)

`npm install @motopeco/react-loading-provider`

```typescript jsx
import { LoadingProvider, useLoading } from '@motopeco/react-loading-provider'

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
