import { ImageGenerationForm } from '@/components/image-generation-form'

const Dashboard = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-16'>
      <ImageGenerationForm />
    </div>
  )
}

export default Dashboard
