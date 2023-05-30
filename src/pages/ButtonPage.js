import PropTypes from 'prop-types'
import className from 'classnames';

function Button({children,primary,secondary,success,warning,danger,outline,rounded,...rest}){



    const finalclassname = className(  /*The className function will help to concat the strings with the help of booleans and won't add the unassinged values to it. */
        
        'flex items-center px-5 py-4 border-2 my-1 mx-4',

        {'border-sky-700 bg-sky-600 text-white': primary, /*will set the property only if the bool value becomes true. */
        'border-sky-500 bg-sky-400 text-white': secondary, 
        'border-emerald-500 bg-emerald-600 text-white': success, 
        'border-yellow-600 bg-yellow-500 text-white': warning, 
        'border-red-600 bg-red-700 text-white': danger,
        'rounded':rounded,
        /*if outline is true, it will over ride with the previouse back ground color. *//*if the both conditions are met then these rules with && will over ride the previouse ones  */
        'bg-white text-blue-700': outline && primary,  
        'bg-white text-blue-500':outline && secondary, 
        'bg-white text-emerald-500':outline && success, 
        'bg-white text-yellow-600':outline && warning, 
        'bg-white text-red-600':outline && danger,
    },rest.className,
        );

    return <div>
    <button {...rest}className={finalclassname}>{children}</button> 
    
    </div> 
}/*"The ...rest operator will receive all the event handlers and send them directly to the button properties without connecting to our custom props. 
The rest.className parameter will take the individual props' designs for the component and override them to customize that specific component."*/


Button.propTypes={
    checkVariationOfValue: ({primary,secondary,success,warning,danger}) =>{
        const total = Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger);  /*In the code we may or may not use the booleans, so by using the !! operator
        infront of the variables we can capture the value of undefined as zero to our code as well. 
        If we do not do it. 
        the_unassigned_variable + boolean assigned variable will give the result of NaN.
         */
        if (total>1){
            return new Error('One attributes per component can be applied among the primary,secondary,success,warning,danger,outline and rounded attributes ');
        }
    },
};

export default Button;

/* 
Prop names picked.

---------- Color deciding styles for uniform format in project ---------------

Primary:            Highly suggested by us. It can be used with any color based on the entire theme.
Secondary:          Suggested by us. It can be used as a lighter version of the color based on the entire theme.
Success:            Represents acknowledgment of something positive. It can be used in green or blue.
Warning:            Represents acknowledgment of something not positive. It should be used in yellow.
Danger:             Retains colors. It can be used with more red.

------- 
Additional styles for uniform format in the project:

Outline:    removes the back ground color and then give that same color only for the border and text inside it.
Rounded:    Determines the border type of the component.

*/
