import Button from './components/Button'

function App(){

    return <div>
        <Button >Normal Button</Button>
        <Button primary outline>Buy Now</Button>
        <Button danger rounded>Add to cart</Button>
        <Button success >Verify the OTP</Button>
        <Button danger outline>Cancel Subscription</Button>
        <Button warning rounded>Sign Out</Button>
        <Button primary rounded>Cancel Subscription</Button>
    </div>
}

export default App;