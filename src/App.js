import React, { useEffect, useState } from "react";
import API from "./data";
import './App.css'

function App() {
  
  const [product, setProduct] = useState([]);
  const [ParentCategories, setParentCategories] = useState(API.Categories)
  const [SubCategories, setSubCategories] = useState(API.SubCategories);
  const [typed, setTyped] = useState([])

  const handler = (e) => {
    if(typed.includes(e)){
      let remove = typed.filter(cat => cat != e)
      setTyped(remove);
    } else {
      setTyped([...typed,e]);
    }
  }

  const algorithm = () => {
    if(typed.length > 0){

      let products = API.Products

      // get typed subcategories object
      let groupTyped = []
      SubCategories.map((sub) => {
        typed.map((type) => {
          if(type == sub.ExtId){
            groupTyped.push(sub)
          }
        })
      })

      //get typed GroupId
      let typedGroupId = []
      groupTyped.map((sub) => {
        typedGroupId.push(sub.GroupId)
      })
      let uniq = [...new Set(typedGroupId)];

      //filter data
      console.log(groupTyped)
      console.log(uniq)

      //filter data where uniq included else push




    } else {
      setProduct(API.Products)
    }
  }

  const algorithm2 = (id,typeId) => {

    let selectedFilters = typed;
    if (selectedFilters.includes(id)) {
			selectedFilters = selectedFilters.filter(item => item != id);
      setTyped(selectedFilters)
		} else {
			selectedFilters.push(id);
		}

    //Filter items by this type
		//First Get selected filters without this type sfntt -> selected filters not this type;
    let items = API.Products
    let subcategories = SubCategories
    let sfntt = subcategories.filter(item => selectedFilters.includes(item.Id) && typeId != item.GroupId);


    //Разделяем фильтры на группы;
		let filtersGroup = [];
		sfntt.map(item => filtersGroup.push(item.GroupId));
		let fG = [...new Set(filtersGroup)];
    fG.map((typeId) => {
			let prodId = [];
			let newSfntt = sfntt.filter(item => item.GroupId == typeId);
			newSfntt.map((item) => {
				if (item.ProductId) {
					let tmp = item.ProductId.split(',')
          tmp.map((i) => !prodId.includes(parseInt(i)) ? prodId.push(parseInt(i)) : null )
				}
			});
			if (prodId.length) {
				items = items.filter(item => prodId.includes(parseInt(item.Id)));
			}
		});
    
    
    //Second Get selected filters with this type sfbt -> selected filters by type;
		let sfbt = SubCategories.filter(item => selectedFilters.includes(item.Id) && typeId == item.GroupId);

    //second filter items by this type
		let prodsId = [];

    //Забираем id продуктов в к-рые содержатся в фильтрах;
		sfbt.map((item) => {
			if (item.ProductId) {
				let tmp = item.ProductId.split(',');
				tmp.map((i) => !prodsId.includes(parseInt(i)) ? prodsId.push(parseInt(i)) : null);
			}
		});

    //Возвращаем items у которых есть такие фильтры by type;
		if (prodsId.length) {
			items = items.filter(item => prodsId.includes(parseInt(item.Id)));
		}

    //Проверяем если осталась только одна выбранная группа, ставим ее typeId в state;
		let aSF = SubCategories.filter(item => selectedFilters.includes(item.Id)); //all selected filters;
		let checkGroup = [];
		aSF.map(item => filtersGroup.push(item.GroupId));
		let cG = [...new Set(filtersGroup)];
		if (cG.length === 1) {
			typeId = cG[0];
		}


    setProduct(items)
    
  }

  const reset = (category) => {
    console.log(category)
  }
  // useEffect(() => {
  //   algorithm()
  // },[typed])

  return (
    <div className="App">
      <div className="category">
        {ParentCategories.map((category, index) => 
        <div key={index}>
          <h1>{category.Title}<button onClick={() => reset(category)}>Reset</button></h1>
          {SubCategories.map((sub) => {
            if(category.GroupId == sub.GroupId){
              return (
                <div>
                  <h4>{sub.Title}<input type="checkbox" value={sub.ExtId} onClick={() => algorithm2(sub.Id,sub.GroupId)}/></h4>                
                </div>
              )
            }
          })}
        </div>
        )}
      </div>
      <div className="product">
        {product.map((item) => {
          return(
            <div className="product_card">
              <h5>{item.Title}</h5>
              <p>Price: {item.Price}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
