<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;

class CustomersController extends Controller
{
    //

    public function all(){
        ##Code
        $customers = Customer::all();
        return response()->json(["customers"=>$customers],200);

    }

    public function get($id){
        ##Code
        
        $customer = Customer::whereId($id)->first();
        return response()->json(["customer"=>$customer],200);


    }

    public function new(Request $request){
        ##Code
        
        $customer = Customer::create($request->only(["name","email","phone","website"]));
        return response()->json(["customer"=>$customer],200);
    }


}
