
const LiveDemo = () => {
  return (
    <div className="mx-auto max-w-4xl">
        <div className="py-16">
        <h1 className="text-2xl md:text-3xl font-extrabold text-black text-center py-2">Live Demo</h1>
        <p className="text-center pb-4">This chatbot was trained on a document explaining <span className="font-bold"> Chatbase</span></p>
        <p className="text-center">You can embed a widget like this on any page on your website!</p>
        <div className="rounded border my-8">
            <iframe src="https://www.chatbase.co/chatbot-iframe/chatbase--1--pdf-p680fxvnm" width={"100%"} height={600}></iframe>
        </div>
        </div>
    </div>
  )
}

export default LiveDemo