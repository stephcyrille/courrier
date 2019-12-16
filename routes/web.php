<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */








Auth::routes();
Route::get('customers', 'CustomersController@list');

Route::get('/home', 'DashboardController@all')->name('home');

Route::get('courrier/all/arrived', 'CourrierArrivedController@listArrived')->name('all_mails_arrived');
Route::get('courrier/single/{mail}/arrived','CourrierArrivedController@showArrived')->name('single_arrived_mail');
Route::get('courrier/add/arrived', 'CourrierArrivedController@addArrived')->name('add_arrived_mail');
Route::post('courrier/add/arrived', 'CourrierArrivedController@postAddArrived')->name('post_add_arrived_mail');

Route::get('courrier/all', 'CourrierController@all')->name('all_mails');

Route::get('courrier/all/arrived/valid', 'CourrierValidController@validArrived')->name('valid_mails_arrived');
Route::get('courrier/single/{mail}/valid','CourrierValidController@showValid')->name('single_valid_mail');

Route::get('courrier/all/outgoing', 'CourrierOutgoingController@listOutgoing')->name('all_mails_outgoing');
Route::get('courrier/single/{mail}/outgoing','CourrierOutgoingController@showOutgoing')->name('single_outgoing_mail');
Route::get('courrier/add/outgoing', 'CourrierOutgoingController@addOutgoing')->name('add_outgoing_mail');

Route::get('courrier/all/internal', 'CourrierInternalController@listInternal')->name('all_mails_internal');
Route::get('courrier/single/{mail}/internal','CourrierInternalController@showInternal')->name('single_internal_mail');
Route::get('courrier/add/internal', 'CourrierInternalController@addInternal')->name('add_internal_mail');

Route::get('courrier/user/all', 'CourrierUserController@listCourriers')->name('all_my_mail');
Route::get('courrier/user/{mail}','CourrierUserController@singleCourrier')->name('single_user_mail');
Route::post('courrier/user/{mail}/avis/request/add','CourrierProcessingController@addAvisRequest')->name('user_mail_new_avis');
Route::post('avis/courrier/{mail}/new','CourrierProcessingController@addNewAvis')->name('add_new_avis');


Route::get('courrier/nottreated', 'CourrierController@not_treated')->name('not_treated_mails');
Route::get('courrier/treated', 'CourrierController@treated')->name('treated_mails');
Route::get('courrier/archived', 'CourrierController@archived')->name('archived_mails');
Route::get('courrier/deleted', 'CourrierController@deleted')->name('deleted_mails');
Route::get('courrier/add', 'CourrierController@add')->name('add_mail');
Route::post('courrier/add','CourrierController@addMail')->name('add_mail_post');
Route::get('courrier/single/{mail}','CourrierController@show')->name('single_mail');

// Route API 
Route::post('courrier/{id}/response','CourrierProcessingController@saveResponse')->name('post_response');

// Routes for decharge
Route::get('courrier/{mail}/decharge','DechargeController@single')->name('single_decharge');

// Paraphers
Route::get('paraphers/all', 'ParapherController@list')->name('all_paraphers');

// Processing each update on courrier
Route::patch('courrier/{mail}/validate', 'CourrierProcessingController@validateCourrier')->name('validate_courrier');
Route::patch('courrier/single/{mail}/forward', 'CourrierProcessingController@coteCourrier')->name('forward_mail');
Route::patch('courrier/single/{mail}/folder/add', 'CourrierProcessingController@addToFolder')->name('add_mail_to_folder');

Route::get('avis/request/all', 'DemandeAvisController@list')->name('avis_request_all');
Route::get('avis/courrier/{mail}','DemandeAvisController@showCourrier')->name('avis_mail');

Route::get('contact', 'ContactsController@list')->name('contact');
Route::get('contact/add', 'ContactsController@add')->name('add_contact');
Route::post('contact/add', 'ContactsController@addContact')->name('add_contact_post');
Route::get('contact/{id}/delete', 'ContactsController@delete')->name('delete_contact');

Route::get('services', 'ServicesController@list')->name('services');
Route::get('services/add', 'ServicesController@add')->name('add_services');
Route::post('services/add', 'ServicesController@addService')->name('add_services_post');
Route::get('services/{id}/delete', 'ServicesController@delete')->name('delete_service');
Route::get('services/{id}/edit', 'ServicesController@editForm')->name('edit_form_service');
Route::patch('services/{id}/edit', 'ServicesController@edit')->name('edit_service');

Route::get('types', 'TypesController@list')->name('types');
Route::get('types/add', 'TypesController@add')->name('add_types');
Route::post('types/add', 'TypesController@addType')->name('add_types_post');
Route::get('types/{id}/delete', 'TypesController@delete')->name('delete_type');

Route::get('profile', 'UserProfilesController@list')->name('profile');

Route::get('manage/users', 'ManageUserController@list')->name('manage_user_list');
Route::get('manage/users/{profile}/single','ManageUserController@show')->name('manage_user_single');
Route::get('manage/users/{profile}/edit','ManageUserController@edit')->name('manage_user_edit');
Route::patch('manage/users/{profile}/edit','ManageUserController@update')->name('manage_user_update');
Route::get('manage/users/{profile}/show','ManageUserController@showSingle')->name('manage_user_show');

Route::get('settings', 'SettingsController@list')->name('settings');

// Route::get('/home', 'HomeController@index')->name('home');

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout')->name('logout');

// API GET FOR USERS 
Route::get('api/profiles/{service}/all', 'ManageUserController@userList');

Route::get('dossiers/all', 'FolderController@allFolders')->name('all_folders');
Route::get('dossiers/add', 'FolderController@form')->name('folder_form');
Route::post('dossiers/add', 'FolderController@add')->name('add_folder');
Route::get('dossiers/{id}/single', 'FolderController@single')->name('single_folder');