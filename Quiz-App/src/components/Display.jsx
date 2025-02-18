import Blocks from './Item';
import Blocksc from './Item3';
import Blocksx from './Item2';
const Display = () => {
    return (

        <div className="items-center flex flex-col min-h-screen justify-center bg-gray-100 p-4 gap-5">
        <h1 className="text-4xl font-bold mb-4">Static Quiz App</h1>
        <h1 className="text-4xl font-bold mb-4">Project name: quiz app</h1>

        <Blocks 
        question = "What is the capital of France?"
        item1= "Berlin"
        item2= "Madrid"
        item3= "Paris"
        item4= "Linsbon"
        />
        <Blocksx
        question = "Who Developed ReactJs?"
        item1 = "Google"
        item2 = "Facebook"
        item3 = "Microsoft"
        item4 = "Apple"
        />
        <Blocksc
        question = "Which Programming language used for"
        item1 = "Python"
        item2 = "Jave"
        item3 = "JavaScript"
        item4 = "C++"
        />
        </div>
    )
}

export default Display;