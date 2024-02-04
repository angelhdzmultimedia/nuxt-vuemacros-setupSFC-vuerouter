import { useRouter } from 'vue-router'

const router = useRouter()

export default () => (
  <div>
    <h1>Login</h1>
    <button onClick={() => router.replace('/')}>Back</button>
  </div>
)
