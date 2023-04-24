
const VideoDemo = () => {
  return (
    <div className="py-16">
        <h1 className="text-2xl md:text-3xl font-extrabold text-black text-center py-2">Video Demo</h1>
        <p className="text-center pb-4">Creating a chatbot for <span className="font-bold">ProductHunt</span> by crawling the website and training the AI on its content. I can then embed the chatbot on the website!</p>
        <div className="py-8 mx-auto">
            <video className="rounded" autoPlay muted loop controls>
                <source src="https://backend.chatbase.co/storage/v1/object/public/chatbase/ph-demo-no-audio.mp4"></source>
            </video>
        </div>
    </div>
  )
}

export default VideoDemo