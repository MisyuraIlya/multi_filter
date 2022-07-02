const Categories = [
    {Id:1, GroupId:1, Title:'Phone system'},
    {Id:1, GroupId:2, Title:'PC'},
    {Id:2, GroupId:3, Title:'Memory'},
    {Id:3, GroupId:4, Title:'Year'}
]
const SubCategories = [
    {Id:1, GroupId:1, ExtId:'android', Title:'Android', ProductId:'6,7,8,9,10'},
    {Id:2, GroupId:1, ExtId:'apple', Title:'Apple', ProductId:'1,2,3,4,5'},
    {Id:3, GroupId:3, ExtId:'12', Title:'12 GB', ProductId:'7'},
    {Id:4, GroupId:3, ExtId:'24', Title:'24 GB', ProductId:'1,2,6'},
    {Id:5, GroupId:3, ExtId:'32', Title:'32 GB', ProductId:'9,11'},
    {Id:6, GroupId:3, ExtId:'64', Title:'64 GB', ProductId:'4,8,10,12'},
    {Id:7, GroupId:3, ExtId:'120', Title:'120 GB', ProductId:'5,13'},
    {Id:8, GroupId:4, ExtId:'2022', Title:'2022', ProductId:'5,8,10,11,13'},
    {Id:9, GroupId:4, ExtId:'2021', Title:'2021', ProductId:'4,9'},
    {Id:10, GroupId:4, ExtId:'2020', Title:'2020', ProductId:'3'},
    {Id:11, GroupId:4, ExtId:'2019', Title:'2019', ProductId:'2,6'},
    {Id:12, GroupId:4, ExtId:'2018', Title:'2018', ProductId:'1,7,12'},
    {Id:13, GroupId:2, ExtId:'dell', Title:'Dell', ProductId:'12'},
    {Id:14, GroupId:2, ExtId:'lenovo', Title:'Lenovo', ProductId:'11'},
    {Id:15, GroupId:2, ExtId:'mac', Title:'Mac', ProductId:'13'},
]

const Products = [
    {Id:1, Title:'Iphone 1', Price:'1000', Options:[
        {Id:2, GroupId:1, ExtId:'apple', Title:'Apple'},
        {Id:4, GroupId:3, ExtId:'24', Title:'24 GB'},
        {Id:12, GroupId:4, ExtId:'2018', Title:'2018'},
    ]},
    {Id:2, Title:'Iphone 2', Price:'2000', Options:[
        {Id:2, GroupId:1, ExtId:'apple', Title:'Apple'},
        {Id:4, GroupId:3, ExtId:'24', Title:'24 GB'},
        {Id:11, GroupId:4, ExtId:'2019', Title:'2019'},
    ]},
    {Id:3, Title:'Iphone 3', Price:'3000', Options:[
        {Id:2, GroupId:1, ExtId:'apple', Title:'Apple'},
        {Id:5, GroupId:3, ExtId:'32', Title:'32 GB'},
        {Id:10, GroupId:4, ExtId:'2020', Title:'2020'},
    ]},
    {Id:4, Title:'Iphone 4',Price:'4000',  Options:[
        {Id:2, GroupId:1, ExtId:'apple', Title:'Apple'},
        {Id:6, GroupId:3, ExtId:'64', Title:'64 GB'},
        {Id:9, GroupId:4, ExtId:'2021', Title:'2021'},
    ]},
    {Id:5, Title:'Iphone 5', Price:'5000', Options:[
        {Id:2, GroupId:1, ExtId:'apple', Title:'Apple'},
        {Id:7, GroupId:3, ExtId:'120', Title:'120 GB'},
        {Id:8, GroupId:4, ExtId:'2022', Title:'2022'},
    ]},
    {Id:6, Title:'Samsung', Price:'500', Options:[
        {Id:1, GroupId:1, ExtId:'android', Title:'Android'},
        {Id:4, GroupId:3, ExtId:'24', Title:'24 GB'},
        {Id:11, GroupId:4, ExtId:'2019', Title:'2019'},
    ]},
    {Id:7, Title:'Xiaomi', Price:'400', Options:[
        {Id:1, GroupId:1, ExtId:'android', Title:'Android'},
        {Id:3, GroupId:3, ExtId:'12', Title:'12 GB'},
        {Id:12, GroupId:4, ExtId:'2018', Title:'2018'},
    ]},
    {Id:8, Title:'MUI', Price:'700', Options:[
        {Id:1, GroupId:1, ExtId:'android', Title:'Android'},
        {Id:6, GroupId:3, ExtId:'64', Title:'64 GB'},
        {Id:8, GroupId:4, ExtId:'2022', Title:'2022'},
    ]},
    {Id:9, Title:'Galaxy', Price:'200', Options:[
        {Id:1, GroupId:1, ExtId:'android', Title:'Android'},
        {Id:5, GroupId:3, ExtId:'32', Title:'32 GB'},
        {Id:9, GroupId:4, ExtId:'2021', Title:'2021'},
    ]},
    {Id:10, Title:'Samsung', Price:'600', Options:[
        {Id:1, GroupId:1, ExtId:'android', Title:'Android'},
        {Id:6, GroupId:3, ExtId:'64', Title:'64 GB'},
        {Id:8, GroupId:4, ExtId:'2022', Title:'2022'},
    ]},
    {Id:11, Title:'Lenovo Pc', Price:'400', Options:[
        {Id:13, GroupId:2, ExtId:'lenovo', Title:'Lenovo'},
        {Id:8, GroupId:4, ExtId:'2022', Title:'2022'},
        {Id:5, GroupId:3, ExtId:'32', Title:'32 GB'},
    ]},
    {Id:12, Title:'Dell Pc', Price:'200', Options:[
        {Id:13, GroupId:2, ExtId:'dell', Title:'Dell'},
        {Id:12, GroupId:4, ExtId:'2018', Title:'2018'},
        {Id:6, GroupId:3, ExtId:'64', Title:'64 GB'},
    ]},
    {Id:13, Title:'Mac Pc', Price:'5000', Options:[
        {Id:13, GroupId:2, ExtId:'mac', Title:'Mac'},
        {Id:7, GroupId:3, ExtId:'120', Title:'120 GB'},
        {Id:8, GroupId:4, ExtId:'2022', Title:'2022'},
    ]}
]

const API = {Categories, SubCategories, Products}

export default API;