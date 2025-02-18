const Blocks = (props) => {

    return (
        <div>
                    <div className="w-120 h-67 rounded-xl shadow-lg p-4 ">
                                <h1 className="flex font-bold">{props.question}</h1>
                                <div className="w-full h-10 bg-green-300 rounded-md mt-3 pt-2">
                                <span className="ml-2 mt-5 text-start">{props.item1}</span>
                                </div>
                                
                                <div className="w-full h-10 bg-green-300 rounded-md mt-3 pt-2">
                                <span className="ml-2 mt-5 text-start">{props.item2}</span>
                                </div>

                                <div className="w-full h-10 bg-red-300 rounded-md mt-3 pt-2">
                                <span className="ml-2 mt-5 text-start">{props.item3}</span>
                                </div>

                                <div className="w-full h-10 bg-green-300 rounded-md mt-3 pt-2">
                                <span className="ml-2 mt-5 text-start">{props.item4}</span>
                                </div>
                                
                            </div>

                          

        </div>
       
    )
}

export default Blocks;