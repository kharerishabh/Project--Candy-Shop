import { chocolateAction } from "./choco-slice";

export const fetchCandyData = (email) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://candyshop-project-default-rtdb.firebaseio.com/${email}.json`)
            if(!response.ok){
                throw new Error('Could not Fetch Data')
            }
            const data = await response.json()
            return data
        }
        try{
            const candyData = await fetchData()
            console.log(candyData)

            dispatch(
                chocolateAction.fetchData({
                    candyItem: candyData.candyItem,
                    totalAmount: candyData.totalAmount,
                    totalQuantity: candyData.totalQuantity
                })
            )
        }catch(err){alert(err)}
    }
}

export const senCandyData = (candy, email) => {
    console.log(email)
return async (dispatch) => {
    const sendData = async () => {
        const response = await fetch(`https://candyshop-project-default-rtdb.firebaseio.com/${email}.json`, {
            method: 'POST',
            body: JSON.stringify({
                candyItem: candy.candyItem,
                totalAmount: candy.totalAmount,
                totalQuantity: candy.totalQuantity
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok){
            throw new Error('Sending Candy data failed')
        }
    }
    try{
        await sendData()
        console.log(sendData)
    }catch(err){alert(err)}
}
}
