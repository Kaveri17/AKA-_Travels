const Order = require('../models/orderModel')
const OrderItems = require('../models/orderItemsModel')

// to place order

exports.placeOrder = async (req, res) => {
    let orderItemsIds = await Promise.all(
        req.body.orderItems.map(async orderitems=>{
            let ORDERITEM = await OrderItems.create({
                package: orderitems.package,
                No_of_childrens:orderitems.No_of_childrens,
                No_of_adults: orderitems.No_of_adults,
                price_of_children: parseFloat(orderitems.price_of_children.replace('$', '')), 
                price_of_adults: parseFloat(orderitems.price_of_adults.replace('$', '')) 
                
            })
            if(!ORDERITEM){
                return res.status(400).json({error:"Something Went Wrong"})
            }
            return ORDERITEM._id
        })
    )
    // calculate total price
    let individualTotals = await Promise.all(
       orderItemsIds.map(async ORDERITEMID =>{
        let ITEM = await OrderItems.findById(ORDERITEMID).populate('package','price_of_children , price_of_adults')
        let TotalForAdult = ITEM.price_of_adults * ITEM.No_of_adults
        let TotalForChild = ITEM.No_of_childrens * ITEM.price_of_children
        console.log(TotalForAdult)
        console.log(TotalForChild)

       return TotalForChild + TotalForAdult
    })
)
let total = individualTotals.reduce((acc,cur) => acc + cur)
console.log(total);


let order_to_place = await Order.create({
    orderItems: orderItemsIds,
      total,
      user: req.body.user,
      contact_person: req.body.contact_person,
      contact_number: req.body.contact_number,
      phone_no: req.body.phone_no,
      status: req.body.status,
      payment_info: req.body.payment_info 
})
if(!order_to_place){
    return res.status(400).json({error:"Failed to place order"})
}
res.send(order_to_place)
}  

// const Order = require('../models/orderModel')
// const OrderItems = require('../models/orderItemsModel')

// exports.placeOrder = async (req, res) => {
//     try {
//         // Create order items
//         let orderItemsIds = await Promise.all(
//             req.body.orderItems.map(async orderitem => {
//                 let ORDERITEM = await OrderItems.create({
//                     package: orderitem.package,
//                     No_of_childrens: orderitem.No_of_childrens,
//                     No_of_adults: orderitem.No_of_adults
//                 });
//                 if (!ORDERITEM) {
//                     return res.status(400).json({ error: "Something Went Wrong" });
//                 }
//                 return ORDERITEM._id;
//             })
//         );

//         // Calculate individual totals
//         // let individualTotals = await Promise.all(
//         //     orderItemsIds.map(async ORDERITEMID => {
//         //         let ITEM = await OrderItems.findById(ORDERITEMID).populate('package', 'add');
//         //         // Log ITEM to ensure it's retrieved correctly
//         //         console.log("ITEM:", ITEM);
//         //         // Check if ITEM exists and has all required fields
//         //         if (!ITEM || !ITEM.package || !ITEM.No_of_childrens || !ITEM.No_of_adults) {
//         //             throw new Error("Invalid data for ITEM");
//         //         }
//         //         // Calculate total for this item
//         //         return ITEM.package.add * ITEM.No_of_childrens * ITEM.No_of_adults;
//         //     })
//         // );


//         // Calculate individual totals
// let individualTotals = await Promise.all(
//     orderItemsIds.map(async ORDERITEMID => {
//         let ITEM = await OrderItems.findById(ORDERITEMID).populate('package', 'add');
//         let totalForItem = ITEM.package.add * ITEM.No_of_childrens * ITEM.No_of_adults;
//         console.log("Total for item:", totalForItem); // Log the total for each item
//         return totalForItem;
//     })
// );


//         // Sum up individual totals to get the total
//         let total = individualTotals.reduce((acc, cur) => acc + cur, 0);

//         // Log total to check its value
//         console.log("Total:", total);

//         // Create the order
//         let order_to_place = await Order.create({
//             package: orderItemsIds,
//             total,
//             user: req.body.user,
//             contact_person: req.body.contact_person,
//             contact_number: req.body.contact_number,
//             phone_no: req.body.phone_no,
//             status: req.body.status,
//             payment_info: req.body.payment_info
//         });

//         if (!order_to_place) {
//             return res.status(400).json({ error: "Failed to place order" });
//         }

//         return res.status(200).json({ success: "Order placed successfully" });

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// };
