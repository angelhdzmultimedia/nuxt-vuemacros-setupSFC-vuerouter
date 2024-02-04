import Test from './test.setup'
import { useRouter } from 'vue-router'

const myName = ref<string>('Vue Macros')
const router = useRouter()

export default () => (
  <div>
    <h1 class="text-3xl font-bold underline">{myName.value}</h1>
    <Test />
    <button onClick={() => router.replace('/login')}>Login</button>
  </div>
)
