<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    
    public function list() {
        $customers = [
            "John Doe",
            "Jane Doe",
            "Stephcyrille"
        ];
    
        $context = [
            'customers' => $customers
        ];
    
        return view('internals.customers', $context);
    }
}
