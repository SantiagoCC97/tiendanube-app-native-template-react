
export interface IprodFetched {
    id:                                     number;
    id_lista:                               number;
    name:                                   string;
    name_in_order:                          string;
    description:                            string;
    type:                                   string;
    stock:                                  string;
    sale_price:                             string;
    suggested_price:                        string;
    user_id:                                number;
    privated_product:                       boolean;
    active:                                 boolean;
    sku:                                    string;
    weight:                                 string;
    length:                                 string;
    width:                                  string;
    height:                                 string;
    deleted_at:                             null;
    created_at:                             string;
    updated_at:                             null;
    is_warehouse_white_brand:               boolean;
    dropi_percent_product_supplier:         null;
    dropi_percent_product_drops:            null;
    user:                                   IprodFetchedUser;
    attributes:                             any[];
    variations:                             any[];
    gallery:                                Gallery[];
    categories:                             Category[];
    warehouses:                             Warehouse[];
    private_product_inventories:            any[];
    user_profit_percentage_product:         any[];
    persistanceState:                       string;
    shops:                                  any[];
    external_code:                          null;
    add_stock_in_return:                    boolean;
    import_list:                            any[];
    name_in_guide:                          null;
    dropi_product_supplier_increment_fixed: boolean;
    external_id:                            null;
}

export interface Category {
    id:              number;
    name:            string;
    parent_category: number;
}

export interface Gallery {
    id:                number;
    url:               null;
    main:              boolean;
    product_id:        number;
    variation_id:      null;
    product_hunter_id: null;
    urlS3:             string;
    external_id:       null;
}

export interface IprodFetchedUser {
    id:                   number;
    subscription_plan_id: number;
    verified_user:        null;
    warranty_policies:    null;
    name:                 string;
    surname:              string;
    white_brand_id:       number;
    plan:                 Plan;
    white_brand:          WhiteBrand;
}

export interface Plan {
    id:                                     number;
    name:                                   string;
    description:                            string;
    active:                                 boolean;
    created_at:                             null;
    updated_at:                             string;
    auto_manage_delivery:                   boolean;
    type:                                   string;
    use_fullfillment:                       boolean;
    dropi_shipping_increment_amount:        string;
    dropi_percent_product_supplier:         string;
    commission_product_supplier:            string;
    dropi_percent_product_drops:            string;
    deleted_at:                             null;
    profit_percentage_orders_influencers:   string;
    white_brand_id:                         number;
    ignore_dropi_percent_product_supplier:  boolean;
    dropi_product_supplier_increment_fixed: boolean;
}

export interface WhiteBrand {
    id: number;
}

export interface Warehouse {
    id:                    number;
    name:                  string;
    user_id:               number;
    user:                  WarehouseUser;
    city_id:               number;
    city:                  City;
    warehouse_white_brand: boolean;
    created_at:            string;
}

export interface City {
    id:                     number;
    name:                   string;
    department_id:          number;
    department:             Department;
    rate_type:              string[];
    rate_type_json:         string[];
    trajectory_type:        string;
    cod_dane:               string;
    zip_code:               null;
    distribution_companies: DistributionCompanies;
}

export interface Department {
    id:              number;
    name:            string;
    country_id:      number;
    department_code: null;
}

export interface DistributionCompanies {
    id:                      number;
    city_id:                 number;
    distribution_company_id: number;
    rate_type:               string[];
    created_at:              null;
    updated_at:              null;
    city_code:               null;
    delivery_type:           null;
}

export interface WarehouseUser {
    id:                                 number;
    name:                               string;
    surname:                            string;
    email:                              string;
    birthday:                           null;
    status:                             string;
    remember_token:                     null;
    created_at:                         string;
    updated_at:                         string;
    register_approved:                  boolean;
    banned:                             boolean;
    approve_product:                    boolean;
    subscription_plan_id:               number;
    phone:                              string;
    notes:                              string;
    url:                                string;
    store_name:                         string;
    store_url:                          string;
    dni:                                string;
    referred_by:                        null;
    parent_seller_id:                   null;
    created_by:                         null;
    deleted_at:                         null;
    last_login:                         string;
    store_phone:                        string;
    can_create_products_and_edit_stock: boolean;
    where_do_you_come_from:             string;
    smtp_server:                        null;
    smtp_port:                          null;
    smtp_security:                      null;
    smtp_from_name:                     null;
    smtp_from_email:                    null;
    smtp_requireauth:                   boolean;
    make_rotulo_dropi:                  boolean;
    pts_st:                             string;
    white_brand_id:                     number;
    topic_ticket_id:                    null;
    verified_user:                      null;
    warranty_policies:                  null;
    debug_mode:                         boolean;
    merchant_registration:              null;
    type_liability_id:                  number;
    type_regime_id:                     number;
    municipality_id:                    number;
    type_organization_id:               null;
    tax_detail_id:                      number;
    type_document_identification_id:    number;
    default_order_state:                string;
    phone_otp:                          string;
    cobrar_orden_con_recaudo:           boolean;
    comercial_id:                       null;
    send_email_notification_orders:     boolean;
    failed_login_count:                 number;
    password_temp:                      null;
    email_to_guide:                     null;
    name_by_default_in_guide:           string;
    email_to_invoice:                   string;
    name_to_invoice:                    string;
    cod_area_phone:                     string;
    cod_area_phone_otp:                 string;
    external_id:                        null;
    urlS3_logo:                         string;
    billing_type:                       null;
    is_address_normalization_activated: number;
    dni_type:                           null;
}
