import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";

import { addAnnoces } from '../../js/action/AnnonceAction';

import {Spinner} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

 function AddAnnonces({title, typeTravaux,category,description,date, 
    setTitle, setTypeTravaux, setCategory, setDescription,setDate,edit,action}) {
      const { isLoading } = useSelector((state) => state.annReducer);
 
  //spinner
  if (isLoading) {
    return <div><Spinner animation="grow" /></div>
    }
    return (
<div className="landingg ">
<div className="msg">
Décrivez votre projet et trouver un artisan pour vos travaux !
</div>

        <div className="form" >
    <div className="row">
        <div className="col-md-12">
            <div className="well well-sm">
                <div className="form-horizontal" method="post">
                    <fieldset>
    

                        <div className="form-group">
                            
                            <div className="col-md-8">
                                <input id="fname" name="title" type="text" placeholder="enter your title" className="form-control"
                                value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-group">
                            
                            <div className="col-md-8">
                                <input id="lname" name="TypeTravaux" type="text" placeholder="enter your typeTravaux" className="form-control"
                                value={typeTravaux} onChange={(e)=>setTypeTravaux(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group">
                           
                            <div className="col-md-8">
                                <input id="email" name="category" type="text" placeholder="enter your category" className="form-control"
                                value={category} onChange={(e)=>setCategory(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group">
                            
                            <div className="col-md-8">
                                <input id="phone" name="date" type="text" placeholder="enter your date" className="form-control"
                                value={date} onChange={(e)=>setDate(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-group">
                           
                            <div className="col-md-8">
                                <textarea className="form-control" id="message" name="description" placeholder="enter your description" rows="7"
                                value={description} onChange={(e)=>setDescription(e.target.value)} maxlength="100"></textarea>
                            </div>
                        </div>

                        <div >
                            <div className="col-md-12 text-center">
                                <input type="submit" className="btn btn-primary btn-lg" value={edit? "edit annonce":"add annonce"} onClick={action} /> 
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        
    )
}
export default AddAnnonces
