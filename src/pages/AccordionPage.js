import Accordion from '../components/Accordion'


function AccordionPage(){
   
    return <div >
        <div className="border rounded-xl border-2 border-zinc-200 py-2 px-2 w-5/5 text-center" >
            <h1>Testing the Accordion</h1>
            <Accordion data={data}/>
        </div>  
    </div>
}

export default AccordionPage;


/* ACCORDION COMPONENT */
const rand = `The sun's golden rays danced upon the tranquil lake, painting the water in shimmering hues.
    A gentle breeze rustled through the trees, carrying with it the sweet scent of blooming flowers.
    The laughter of children echoed in the distance, filling the air with infectious joy.
    A lone wolf howled at the moon, its mournful cry piercing the silence of the night.
    The old oak tree stood tall and proud, its branches reaching towards the heavens.
    The aroma of freshly baked bread wafted from the cozy bakery, enticing passersby.
    Raindrops pitter-pattered on the rooftop, creating a soothing symphony of nature's percussion.
    A colorful butterfly fluttered by, its delicate wings captivating all who beheld its beauty.`;


const data = [{title:"Part 1", rand},{title:"Part 2", rand},{title:"Part 3", rand},{title:"Part 4", rand},{title:"Part 5", rand},{title:"Part 6", rand}];

