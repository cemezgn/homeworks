<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $table ='restaurant';
    public $timestamps = false;

    public function restaurants()
    {

        return Restaurant::hasMany('App\Model\Food','restaurantId');
    }
}
