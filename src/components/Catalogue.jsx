import React, { Component } from 'react';
import {db} from "./firebase.js";


class Catalogue extends React.Component {
   constructor(props) {
   super(props);

       this.state = {
           catalogue: [],
           searchTerm: '',
           sort: ''
       }

   }

    typingHandler = (e) =>{
        this.setState({
            searchTerm: e.target.value

        })
    };

    selectHandler = (e) =>{
        this.setState({
            sort: e.target.value
        })
    };


   render(){


     return (
        <section id='search' className='container flex'>
            <SearchBar
                typingHandler={this.typingHandler}
                selectHandler={this.selectHandler}
                searchTerm={this.state.searchTerm}
            />
            <DisplayArea
                catalogue={this.state.catalogue}
                searchTerm={this.state.searchTerm}
                sort={this.state.sort}
            />
        </section>

     )
   }


    componentDidMount() {
        db.collection('catalogue').get().then((snap) => {
            console.log(snap.docs);

            snap.docs.forEach((e) => {
                const item = Object.assign(e.data(), {id: e.id}); //dodaje id z odpowiedzi do obiektu
                this.setState({
                    catalogue: [
                        ...this.state.catalogue,
                        item
                    ]
                })
            });
        })
    }
 }


 class SearchBar extends React.Component {
    constructor(props) {
    super(props);

    }

     typingHandler = (e) =>{
         this.props.typingHandler(e)
     };

     selectHandler = (e) =>{
         this.props.selectHandler(e)
     };




    render(){

      return (
            <section id='search_section_input'>
                <input type="text" value={this.props.searchTerm} onChange={this.typingHandler} placeholder='beer,style or brewery'></input>
                <select name="sort" id="search_input_select" onChange={this.selectHandler}>
                    <option value="">Sortuj...</option>
                    <option value="1">Cena - rosnąco</option>
                    <option value="2">Cena - malejąco</option>
                </select>
            </section>

      )
    }
  }


  class DisplayArea extends React.Component {
     constructor(props) {
     super(props);


     }


     render(){


         let seek = this.props.catalogue.filter((e, i) => {
             let reg = `^${this.props.searchTerm.toLocaleLowerCase()}`;
             var re = new RegExp(reg, 'g');
             return e.name.toLocaleLowerCase().match(re) !== null || e.brewery.toLocaleLowerCase().match(re) !== null || e.style.toLocaleLowerCase().match(re) !== null
         });

         if (this.props.sort==1) {
             seek.sort((a,b)=>{
                 return Number(a.price) - Number(b.price)
             })
         } else if (this.props.sort==2){
             seek.sort((a,b)=>{
                 return Number(b.price) - Number(a.price)
             })
         }


         let items = seek.map((e,i)=>{
             return <div className='search_itemBox flex flex-column' key={i}>
                 <h3>{e.name}</h3>
                 <h3>{e.style}</h3>
                 <h3>{e.brewery}</h3>
                 <h3>{e.price} PLN</h3>
             </div>
         });



       return (
            <section id='search_displayArea' className='flex'>
                {items}
            </section>
       )
     }
   }

 export default Catalogue