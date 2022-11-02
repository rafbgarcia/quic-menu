import {
  IonInput,
  IonLabel,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react"
import { useState } from "react"
import { API } from "aws-amplify"

import * as types from "../API"
import { createPlace } from "../graphql/mutations"
import { getGroups, goomerInfoUrl } from "../lib/import_from_goomer_helpers"
import { useHistory } from "react-router"

const info: any = {
  version: "2.0",
  info: {
    id: 176907,
    name: "Confeitos e Afetos",
    address: "Rua Max Wilhelm, 140 - Vila Baependi, Jaraguá do Sul - SC",
    menu: "https://www.goomer.app/webmenu/confeitos-e-afetos/menu/1667072749976",
    hours: [{ from: "Ter", to: "Sex", open: "00:00", close: "00:00" }],
    open_hours: "Ter - Sex: 00:00 - 00:00\n",
    order_phone: "",
    coupons: [],
    welcome_message: "Aqui tem afeto",
    color_3: "#ffffff",
    color_1: "#1D84FF",
    logo: "https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_v1649716508.png",
    order_whatsapp: 0,
    show_prices_whatsapp: 0,
    show_barcodes_whatsapp: 0,
    takeaway_discount: { type: "percent", value: 0 },
    delivery_waiting_time: "",
    delivery_fee: 0,
    delivery_required_amount: 0,
    checkout_options: {
      cpf: { enable: 0, required: 0 },
      phone_number: { enable: 1, required: 0 },
      name: { enable: 1, required: 0 },
      option_groups: [
        {
          name: "Escolha uma opção",
          type: "delivery-options",
          options: [
            {
              name: "Retirar no local",
              info: "(sujeito a disponibilidade)",
              discount: { type: "percent", value: 0 },
            },
            {
              name: "Entrega",
              info: "(sujeito a disponibilidade e taxas)",
              delivery: true,
              field: {
                name: "Qual é o seu endereço?",
                required: 1,
                type: "text",
                limit: 120,
              },
              waiting_time: "",
              fee: 0,
              required_amount: 0,
            },
          ],
        },
        {
          name: "Como você vai pagar?",
          type: "payment-options",
          options: [
            {
              name: "Dinheiro",
              field: {
                name: "Troco para quanto?",
                required: 1,
                type: "number",
                mask: "currency",
              },
            },
            { name: "Débito" },
            { name: "Crédito" },
          ],
        },
      ],
    },
  },
  settings: {
    slug: "confeitos-e-afetos",
    id: 177777,
    store_code: 176907,
    name: "Confeitos e Afetos",
    address: {
      zipcode: "89256-000",
      country: "Brasil",
      number: "140",
      city: "Jaraguá do Sul",
      street: "Rua Max Wilhelm",
      latitude: "-26.481816",
      state: "SC",
      neighborhood: "Vila Baependi",
      complement: null,
      longitude: "-49.079147",
    },
    about: null,
    specialty_name: "Cafeteria",
    gg_version: "0.0.1",
    subscription_info: {
      freemium: false,
      pack_type: "free",
      trial_enabled: false,
    },
    description: "Template Padrão",
    mm_splash_screen_message: "Aqui tem afeto",
    mm_logo_key:
      "stores/177777/products/mobile_menu/templates/294665/logo_v1649716508.png",
    mm_logo_url:
      "https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_v1649716508.png",
    mm_resized_logos:
      '{"logo":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_v1649716508.png"},"logo_16x16":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_16x16_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_16x16_v1649716508.png"},"logo_32x32":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_32x32_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_32x32_v1649716508.png"},"logo_120x120":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_120x120_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_120x120_v1649716508.png"},"logo_180x180":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_180x180_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_180x180_v1649716508.png"},"logo_192x192":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_192x192_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_192x192_v1649716508.png"},"logo_300x300":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_300x300_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_300x300_v1649716508.png"},"logo_512x512":{"key":"stores/177777/products/mobile_menu/templates/294665/logo_512x512_v1649716508.png","url":"https://static.goomer.app/stores/177777/products/mobile_menu/templates/294665/logo_512x512_v1649716508.png"}}',
    mm_main_color: "#ffffff",
    mm_secondary_color: "#1D84FF",
    menu_url:
      "https://www.goomer.app/webmenu/confeitos-e-afetos/menu/1667072749976",
    mm_always_open: "true",
    mm_coupon_enabled: "true",
    mm_delivery_zone_options_neighborhood_enabled: "false",
    mm_delivery_zone_type: "static",
    mm_fixed_hours: "",
    mm_hours_mode: "fixed",
    mm_info_version: "2.0",
    mm_in_store_always_open: "true",
    mm_in_store_enabled: "true",
    mm_in_store_fixed_hours: "",
    mm_in_store_hours_mode: "fixed",
    mm_in_store_operating_hours:
      '{"hours":[{"from":"Ter","to":"Sex","open":"9:30","close":"19:0"},{"from":"Sab","to":"Sab","open":"9:0","close":"17:30"}]}',
    mm_in_store_store_closed: "true",
    mm_notification_new_order: "false",
    mm_onsite_menu_url:
      "https://www.goomer.app/webmenu/confeitos-e-afetos/localmenu/1667072749976",
    mm_operating_hours:
      '{"hours":[{"from":"Ter","to":"Sex","open":"0:0","close":"0:0"}]}',
    mm_order_scheduling_delivery:
      '{"min":{"value":2,"type":"hours"},"max":{"value":7,"type":"hours"}}',
    mm_order_scheduling_enabled: "false",
    mm_order_scheduling_only: "false",
    mm_order_scheduling_takeaway:
      '{"min":{"value":2,"type":"hours"},"max":{"value":7,"type":"hours"}}',
    mm_order_status_check_enabled: "false",
    mm_payment_qrcode_tuna_credit_card_checkout_enabled: "false",
    mm_payment_qrcode_tuna_pix_checkout_enabled: "false",
    mm_payment_tuna_credit_card_checkout_enabled: "false",
    mm_payment_tuna_pix_checkout_enabled: "false",
    mm_show_short_address: "false",
    mm_store_closed: "true",
    mm_suggestive_selling_enabled: "true",
    pre_mm_payment_qrcode_tuna_credit_card_checkout_enabled: "false",
    pre_mm_payment_qrcode_tuna_pix_checkout_enabled: "false",
    pre_mm_payment_tuna_credit_card_checkout_enabled: "false",
    pre_mm_payment_tuna_pix_checkout_enabled: "false",
    mm_store_domain: "",
    mm_currency:
      '{"id":1,"code":"BRL","label":"Real","symbol":"R$","enabled":true,"locale":"pt-BR"}',
    mm_payment_pix_info: '{"key": "", "accountName": ""}',
    mm_payment_qrcode_credit_enabled: "false",
    mm_facebook_business_access_token: "",
    mm_payment_qrcode_debit_flags: "",
    mm_free_delivery_enabled: "false",
    mm_enabled: "true",
    mm_delivery_zone_options_neighborhood: "",
    mm_takeaway_discount_enabled: "false",
    mm_new_menu_enabled: "false",
    mm_order_show_prices: "false",
    mm_free_delivery_minimum_value: "0",
    mm_payment_debit_enabled: "true",
    mm_ask_for_name: "optional",
    mm_delivery_average_time: "",
    mm_payment_mpago_link_enabled: "false",
    mm_delivery_zone_options: "",
    mm_payment_voucher_flags: "",
    mm_payment_qrcode_mpago_checkout_enabled: "false",
    mm_payment_voucher_enabled: "false",
    mm_payment_qrcode_voucher_flags: "",
    mm_facebook_business_enabled: "false",
    mm_payment_vrpague_link_enabled: "false",
    mm_in_store_maximum_order_distance: "500",
    mm_payment_credit_enabled: "true",
    mm_delivery_fee: "0",
    mm_payment_credit_flags: "",
    mm_in_store_modes: '["mm_kiosk", "mm_table"]',
    mm_delivery_minimum_value_enabled: "false",
    mm_delivery_fee_enabled: "false",
    mm_takeaway_time: "",
    mm_in_store_service_tax: "0",
    mm_payment_cash_enabled: "true",
    mm_google_reserve_link_order_food: "true",
    mm_takeaway_discount: "0",
    mm_facebook_pixel_dns_code: "",
    mm_delivery_zone_options_static: "",
    mm_order_show_orders_count: "true",
    mm_in_store_enable_service_tax: "false",
    mm_delivery_enabled: "true",
    mm_takeaway_enabled: "true",
    mm_whatsapp_phone_number: "",
    mm_temporarily_closed: "false",
    mm_timezone:
      '{"id":21,"code":"BRT","iana":"America/Sao_Paulo","name":"Brasília Time","label":"Horário de Brasília","utc":"-03:00","enabled":true}',
    mm_delivery_zone_options_dynamic: "[]",
    mm_in_store_validate_distance_enabled: "false",
    mm_payment_mpago_qrcode_enabled: "false",
    mm_facebook_pixel_id: "",
    mm_order_show_codes: "false",
    mm_payment_qrcode_voucher_enabled: "false",
    mm_payment_debit_flags: "",
    mm_payment_qrcode_credit_flags: "",
    mm_whatsapp_order_enabled: "false",
    mm_receipt_ask_for_cpf: "false",
    mm_change_new_menu_count: "0",
    mm_payment_qrcode_cash_enabled: "false",
    mm_payment_mpago_store_public_key: "",
    mm_payment_pix_enabled: "false",
    mm_payment_mpago_marketplace_fee: "3.6",
    mm_ask_for_phone: "optional",
    mm_payment_qrcode_debit_enabled: "false",
    mm_delivery_minimum_value: "0",
    mm_order_show_observations: "true",
    mm_payment_mpago_checkout_enabled: "false",
    mm_feature_gnl_tab_operation_enabled: true,
    mm_feature_pwa_enabled: true,
    mm_feature_orders_pulling_off_enabled: true,
    mm_feature_legacy_payment_manual_pix_enabled: true,
    mm_feature_subscription_trial_enabled: "false",
    mm_feature_subscription_pack_type: "pro",
    mm_feature_subscription_ggo_enabled: "",
    mm_feature_subscription_freemium_status: "inactive",
  },
}
const settings = info.settings
const menu: any = {
  products: [
    {
      group_id: 1220301,
      limit_age: false,
      group_name: "Brigadeiros",
      id: 7533709,
      name: "Brigadeiro belga ao leite",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540554/picture/small/221015195837",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540554/picture/medium/221015195837",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540554/picture/large/221015195837",
      },
      suggestions: [],
      version: "221015195837",
      prices: [{ name: "", price: 4.5, code: "43" }],
      price_tag: 4.5,
      min_price_flag: false,
    },
    {
      group_id: 1220301,
      limit_age: false,
      group_name: "Brigadeiros",
      id: 7533710,
      name: "Brigadeiro belga meio amargo",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540555/picture/small/220930155009",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540555/picture/medium/220930155009",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540555/picture/large/220930155009",
      },
      suggestions: [],
      version: "220930155009",
      prices: [{ name: "", price: 4.5, code: "44" }],
      price_tag: 4.5,
      min_price_flag: false,
    },
    {
      group_id: 1220301,
      limit_age: false,
      group_name: "Brigadeiros",
      id: 7533711,
      name: "Brigadeiro de champagne com chocolate belga Ruby",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540556/picture/small/221006145514",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540556/picture/medium/221006145514",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540556/picture/large/221006145514",
      },
      suggestions: [],
      version: "221006145514",
      prices: [{ name: "", price: 4.5, code: "41" }],
      price_tag: 4.5,
      min_price_flag: false,
    },
    {
      group_id: 1220301,
      limit_age: false,
      group_name: "Brigadeiros",
      id: 7533713,
      name: "Brigadeiro créme brûlèe",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540558/picture/small/221029131943",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540558/picture/medium/221029131943",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540558/picture/large/221029131943",
      },
      suggestions: [],
      version: "221029131943",
      prices: [{ name: "", price: 4.5, code: "40" }],
      price_tag: 4.5,
      min_price_flag: false,
    },
    {
      group_id: 1220301,
      limit_age: false,
      group_name: "Brigadeiros",
      id: 7533714,
      name: "Brigadeiro Leite Ninho com Nutella",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540559/picture/small/221018202202",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540559/picture/medium/221018202202",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540559/picture/large/221018202202",
      },
      suggestions: [],
      version: "221018202202",
      prices: [{ name: "", price: 4.5, code: "45" }],
      price_tag: 4.5,
      min_price_flag: false,
    },
    {
      group_id: 1220303,
      limit_age: false,
      group_name: "Bolos recheados",
      id: 7533717,
      name: "Devil´s cake",
      description:
        "Para os “chocólotras”! Um bolo chocolatudo feito com massa e recheio de chocolate",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540562/picture/small/221028205738",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540562/picture/medium/221028205738",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540562/picture/large/221028205738",
      },
      suggestions: [],
      version: "221028205738",
      prices: [{ name: "", price: 17, code: "48" }],
      price_tag: 17,
      min_price_flag: false,
    },
    {
      group_id: 1220303,
      limit_age: false,
      group_name: "Bolos recheados",
      id: 7533718,
      name: "Red Velvet",
      description:
        "O bolo vermelho e “aveludado”, com recheio a base de cream cheese.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540563/picture/small/221025121958",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540563/picture/medium/221025121958",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540563/picture/large/221025121958",
      },
      suggestions: [],
      version: "221025121958",
      prices: [{ name: "", price: 16, code: "49" }],
      price_tag: 16,
      min_price_flag: false,
    },
    {
      group_id: 1220303,
      limit_age: false,
      group_name: "Bolos recheados",
      id: 7533719,
      name: "Bolo de 4 leites com morango",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540564/picture/small/221028205736",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540564/picture/medium/221028205736",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540564/picture/large/221028205736",
      },
      suggestions: [],
      version: "221028205736",
      prices: [{ name: "", price: 15, code: "50" }],
      price_tag: 15,
      min_price_flag: false,
    },
    {
      group_id: 1220303,
      limit_age: false,
      group_name: "Bolos recheados",
      id: 7533720,
      name: "Bolo de doce de leite, nozes e café",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540565/picture/small/221028201021",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540565/picture/medium/221028201021",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540565/picture/large/221028201021",
      },
      suggestions: [],
      version: "221028201021",
      prices: [{ name: "", price: 15, code: "51" }],
      price_tag: 15,
      min_price_flag: false,
    },
    {
      group_id: 1220306,
      limit_age: false,
      group_name: "Tortinha",
      id: 7533727,
      name: "Torta de maçã",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540572/picture/small/221025122147",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540572/picture/medium/221025122147",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540572/picture/large/221025122147",
      },
      suggestions: [],
      version: "221025122147",
      prices: [{ name: "", price: 14, code: "71" }],
      price_tag: 14,
      min_price_flag: false,
    },
    {
      group_id: 1220307,
      limit_age: false,
      group_name: "Na dúvida, seja doce",
      id: 8170598,
      name: "S'mores",
      description:
        "Ganache de chocolate belga com marshellow - tudo servido quentinho. Acompanha bolacha maizena e morangos.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8178319/picture/small/221028122201",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8178319/picture/medium/221028122201",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8178319/picture/large/221028122201",
      },
      suggestions: [],
      version: "221028122201",
      prices: [{ name: "", price: 54, code: "40071" }],
      price_tag: 54,
      min_price_flag: false,
    },
    {
      group_id: 1220307,
      limit_age: false,
      group_name: "Na dúvida, seja doce",
      id: 7695795,
      name: "Mini bolo de cenoura ",
      description:
        "Mini bolo de cenoura com ganache de chocolate belga ao leite.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7702869/picture/small/221027122622",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7702869/picture/medium/221027122622",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7702869/picture/large/221027122622",
      },
      suggestions: [],
      version: "221027122622",
      prices: [{ name: "", price: 12, code: "55" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220307,
      limit_age: false,
      group_name: "Na dúvida, seja doce",
      id: 7533731,
      name: " Pavlova",
      description:
        "Doce feito de suspiro com recheio a base de cream cheese e limão.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540576/picture/small/221020152329",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540576/picture/medium/221020152329",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540576/picture/large/221020152329",
      },
      suggestions: [],
      version: "221020152329",
      prices: [{ name: "", price: 12, code: "36" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220307,
      limit_age: false,
      group_name: "Na dúvida, seja doce",
      id: 7533729,
      name: "Brownie",
      description:
        "Brownie de chocolate meio amargo com nozes e cobertura de creme de Leite Ninho.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540574/picture/small/221029191402",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540574/picture/medium/221029191402",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540574/picture/large/221029191402",
      },
      suggestions: [],
      version: "221029191402",
      prices: [{ name: "", price: 16, code: "59" }],
      price_tag: 16,
      min_price_flag: false,
    },
    {
      group_id: 1220307,
      limit_age: false,
      group_name: "Na dúvida, seja doce",
      id: 7533730,
      name: "Cookies",
      description:
        "Recheado com creme de cookies and cream e gotas de chocolate belga branco.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540575/picture/small/221020152336",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540575/picture/medium/221020152336",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540575/picture/large/221020152336",
      },
      suggestions: [],
      version: "221020152336",
      prices: [{ name: "", price: 9, code: "33" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220307,
      limit_age: false,
      group_name: "Na dúvida, seja doce",
      id: 7533733,
      name: "Croissant recheado com Nutella",
      description: "Croissant de fermentação natural recheado com Nutella.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540578/picture/small/221020152338",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540578/picture/medium/221020152338",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540578/picture/large/221020152338",
      },
      suggestions: [],
      version: "221020152338",
      prices: [{ name: "", price: 23, code: "64" }],
      price_tag: 23,
      min_price_flag: false,
    },
    {
      group_id: 1220308,
      limit_age: false,
      group_name: "Funcionais",
      id: 7533737,
      name: "Mini bolo de laranja",
      description:
        "Sem glúten/sem lactose/sem açúcar. Acompanha caldinha de laranja. ",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540582/picture/small/221025181120",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540582/picture/medium/221025181120",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540582/picture/large/221025181120",
      },
      suggestions: [],
      version: "221025181120",
      prices: [{ name: "", price: 12, code: "30" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220308,
      limit_age: false,
      group_name: "Funcionais",
      id: 7533738,
      name: "Mini bolo maçã com canela",
      description:
        "Sem glúten/sem lactose/sem açúcar. Acompanha caldinha de maçã.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540583/picture/small/220920183949",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540583/picture/medium/220920183949",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540583/picture/large/220920183949",
      },
      suggestions: [],
      version: "220920183949",
      prices: [{ name: "", price: 12, code: "67" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220308,
      limit_age: false,
      group_name: "Funcionais",
      id: 8546289,
      name: "Cupcake de chocolate",
      description:
        "Cupcake de chocolate sem glúten, sem lactose e sem açúcar refinado.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8554600/picture/small/221018200830",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8554600/picture/medium/221018200830",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8554600/picture/large/221018200830",
      },
      suggestions: [],
      version: "221018200830",
      prices: [{ name: "", price: 12, code: "75" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220308,
      limit_age: false,
      group_name: "Funcionais",
      id: 8586808,
      name: "Cookies",
      description:
        "Duplinha de cookies de chocolate e de baunilha - sem glúten, sem lactose e sem açúcar refinado. ",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8595178/picture/small/220928191526",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8595178/picture/medium/220928191526",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8595178/picture/large/220928191526",
      },
      suggestions: [],
      version: "220928191526",
      prices: [{ name: "", price: 7, code: "76" }],
      price_tag: 7,
      min_price_flag: false,
    },
    {
      group_id: 1220308,
      limit_age: false,
      group_name: "Funcionais",
      id: 7533739,
      name: "Cuca de banana com castanhas",
      description: "Sem glúten/sem lactose/adoçado com açúcar demerara",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540584/picture/small/221026122647",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540584/picture/medium/221026122647",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540584/picture/large/221026122647",
      },
      suggestions: [],
      version: "221026122647",
      prices: [{ name: "", price: 12, code: "68" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220308,
      limit_age: false,
      group_name: "Funcionais",
      id: 7705610,
      name: "Mini bolo de milho e coco",
      description: "Sem glúten/sem lactose.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7712698/picture/small/220928190524",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7712698/picture/medium/220928190524",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7712698/picture/large/220928190524",
      },
      suggestions: [],
      version: "220928190524",
      prices: [{ name: "", price: 12, code: "29" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220308,
      limit_age: false,
      group_name: "Funcionais",
      id: 7533740,
      name: "Brownie",
      description: "Sem glúten/sem lactose/adoçado com açúcar demerara",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540585/picture/small/221026122649",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540585/picture/medium/221026122649",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540585/picture/large/221026122649",
      },
      suggestions: [],
      version: "221026122649",
      prices: [{ name: "", price: 16, code: "69" }],
      price_tag: 16,
      min_price_flag: false,
    },
    {
      group_id: 1220298,
      limit_age: false,
      group_name: "Salgados",
      id: 7533695,
      name: "Empadinha caprese",
      description: "Mussarela de búfala, tomate cereja e manjericão",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540540/picture/small/221026175537",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540540/picture/medium/221026175537",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540540/picture/large/221026175537",
      },
      suggestions: [],
      version: "221026175537",
      prices: [{ name: "", price: 12, code: "350" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220298,
      limit_age: false,
      group_name: "Salgados",
      id: 7540950,
      name: "Empadinha de brócolis com gorgonzola",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547808/picture/small/221026122658",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547808/picture/medium/221026122658",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547808/picture/large/221026122658",
      },
      suggestions: [],
      version: "221026122658",
      prices: [{ name: "", price: 12, code: "351" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220298,
      limit_age: false,
      group_name: "Salgados",
      id: 7533697,
      name: "Folhado de palmito",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540542/picture/small/221019122619",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540542/picture/medium/221019122619",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540542/picture/large/221019122619",
      },
      suggestions: [],
      version: "221019122619",
      prices: [{ name: "", price: 12, code: "353" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220298,
      limit_age: false,
      group_name: "Salgados",
      id: 7533698,
      name: "Folhado de frango",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540543/picture/small/221026122700",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540543/picture/medium/221026122700",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540543/picture/large/221026122700",
      },
      suggestions: [],
      version: "221026122700",
      prices: [{ name: "", price: 12, code: "354" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220298,
      limit_age: false,
      group_name: "Salgados",
      id: 7533693,
      name: "Mini coxinha de frango",
      description: "4 unidades",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540538/picture/small/221018122615",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540538/picture/medium/221018122615",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540538/picture/large/221018122615",
      },
      suggestions: [],
      version: "221018122615",
      prices: [{ name: "", price: 6, code: "355" }],
      price_tag: 6,
      min_price_flag: false,
    },
    {
      group_id: 1220298,
      limit_age: false,
      group_name: "Salgados",
      id: 7634031,
      name: "Coxinha de costela",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641013/picture/small/221029115542",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641013/picture/medium/221029115542",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641013/picture/large/221029115542",
      },
      suggestions: [],
      version: "221029115542",
      prices: [{ name: "", price: 9, code: "357" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220298,
      limit_age: false,
      group_name: "Salgados",
      id: 7634033,
      name: "Kibe vegetariano",
      description:
        "Feito com sorgo, chia, mix de legumes, castanha, hortelã, queijo sem lactose, requeijão sem lactose, tahine.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641015/picture/small/221021122335",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641015/picture/medium/221021122335",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641015/picture/large/221021122335",
      },
      suggestions: [],
      version: "221021122335",
      prices: [{ name: "", price: 11, code: "358" }],
      price_tag: 11,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 8422798,
      name: "Ciabatta fermentação natural",
      description:
        "Leve o nosso ciabatta fresquinho para a sua casa! Ele é feito aqui na nossa cozinha com fermento natural. É vendido o pacote com 3 unidades.\r\n\r\n(Recomendamos esquentar no forno)",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8430905/picture/small/221025154953",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8430905/picture/medium/221025154953",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8430905/picture/large/221025154953",
      },
      suggestions: [],
      version: "221025154953",
      prices: [{ name: "", price: 18, code: "18017" }],
      price_tag: 18,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7533700,
      name: "Bruschetta de cogumelo",
      description:
        "Pão de fermentação natural 100% integral feito na casa, cogumelo, queijo brie e alho poró",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540545/picture/small/220920124833",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540545/picture/medium/220920124833",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540545/picture/large/220920124833",
      },
      suggestions: [],
      version: "220920124833",
      prices: [{ name: "", price: 24, code: "18004" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7540977,
      name: "Bruschetta de caprese",
      description:
        "Pão de fermentação natural 100% integral feito na casa com recheio de caprese (tomate, mozarela de búfala e manjericão).",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547835/picture/small/221004133052",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547835/picture/medium/221004133052",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547835/picture/large/221004133052",
      },
      suggestions: [],
      version: "221004133052",
      prices: [{ name: "", price: 24, code: "18005" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7541003,
      name: "Avocado toast",
      description:
        "Pão de fermentação natural 100% integral feito na casa, abacate e ovo com gema mole.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547861/picture/small/220920124840",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547861/picture/medium/220920124840",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547861/picture/large/220920124840",
      },
      suggestions: [],
      version: "220920124840",
      prices: [{ name: "", price: 20, code: "18006" }],
      price_tag: 20,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7540975,
      name: "Bruschetta de patê de atum ",
      description:
        "Pão de fermentação natural 100% integral feito na casa, patê de atum e queijo.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547833/picture/small/220920124843",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547833/picture/medium/220920124843",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547833/picture/large/220920124843",
      },
      suggestions: [],
      version: "220920124843",
      prices: [{ name: "", price: 24, code: "18007" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7540973,
      name: "Bruschetta de salmão defumado",
      description:
        " Pão de fermentação natural 100% integral feito na casa, tiras de salmão defumado, cream cheese, rúcula e pimenta calabresa.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547831/picture/small/221026134723",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547831/picture/medium/221026134723",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547831/picture/large/221026134723",
      },
      suggestions: [],
      version: "221026134723",
      prices: [{ name: "", price: 25, code: "18008" }],
      price_tag: 25,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 8296868,
      name: "Pão com bolinho",
      description:
        "Ciabatta de fermentação natural feito na casa - O famoso pão com bolinho feito aqui na casa, acompanha mostarda e queijo.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8304747/picture/small/220920124847",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8304747/picture/medium/220920124847",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8304747/picture/large/220920124847",
      },
      suggestions: [],
      version: "220920124847",
      prices: [{ name: "", price: 24, code: "18018" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7533699,
      name: "Ciabatta com presunto de parma e mozarela",
      description:
        "Ciabatta de fermentação natural feito na casa, presunto de parma, queijo mozarela e tomate.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540544/picture/small/220924173517",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540544/picture/medium/220924173517",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540544/picture/large/220924173517",
      },
      suggestions: [],
      version: "220924173517",
      prices: [{ name: "", price: 24, code: "18009" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7540956,
      name: "Ciabatta com salame e mozarela",
      description:
        "Ciabatta de fermentação natural feito na casa, salame, queijo mozarela  e tomate.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547814/picture/small/220924173524",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547814/picture/medium/220924173524",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547814/picture/large/220924173524",
      },
      suggestions: [],
      version: "220924173524",
      prices: [{ name: "", price: 24, code: "18010" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7541000,
      name: "Ciabatta de pernil suíno",
      description:
        "Ciabatta de fermentação natural feito na casa, pernil suíno, repolho roxo e molho de pimenta com goiabada.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547858/picture/small/220920124858",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547858/picture/medium/220920124858",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547858/picture/large/220920124858",
      },
      suggestions: [],
      version: "220920124858",
      prices: [{ name: "", price: 25, code: "18011" }],
      price_tag: 25,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7533703,
      name: "Croque Madame",
      description:
        "O sanduíche francês feito com pão brioche  da casa, presunto, queijo mozarela, molho bechamel e ovo com gema mole.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540548/picture/small/220920124902",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540548/picture/medium/220920124902",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540548/picture/large/220920124902",
      },
      suggestions: [],
      version: "220920124902",
      prices: [{ name: "", price: 23, code: "18012" }],
      price_tag: 23,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7541045,
      name: "Croissant  de presunto parma com queijo brie",
      description:
        "Croissant de fermentação natural recheado com presunto parma e queijo brie.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547903/picture/small/220920124909",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547903/picture/medium/220920124909",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547903/picture/large/220920124909",
      },
      suggestions: [],
      version: "220920124909",
      prices: [{ name: "", price: 24, code: "18001" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7541050,
      name: "Croissant de queijo brie com geleia caseira de morango",
      description:
        "Croissant de fermentação natural recheado com queijo brie e geleia de morango feita na casa.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547908/picture/small/220920124906",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547908/picture/medium/220920124906",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547908/picture/large/220920124906",
      },
      suggestions: [],
      version: "220920124906",
      prices: [{ name: "", price: 23, code: "18002" }],
      price_tag: 23,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7541113,
      name: "Avocado toast",
      description:
        "Pão sem glúten e sem lactose recheado com abacate e ovo. Sem glúten e sem lactose.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547971/picture/small/220920124911",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547971/picture/medium/220920124911",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547971/picture/large/220920124911",
      },
      suggestions: [],
      version: "220920124911",
      prices: [
        {
          name: "",
          price: 20,
          code: "18013",
        },
      ],
      price_tag: 20,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7541115,
      name: "Pão com linguiça colonial e queijo mozarela",
      description:
        "Pão sem glúten e sem lactose recheado com linguiça colonial e queijo mozarela sem lactose. Sem glúten e sem lactose.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547973/picture/small/220920124913",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547973/picture/medium/220920124913",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7547973/picture/large/220920124913",
      },
      suggestions: [],
      version: "220920124913",
      prices: [{ name: "", price: 20, code: "18014" }],
      price_tag: 20,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 7533702,
      name: "Pão caprese",
      description:
        "Pão sem glúten e sem lactose com recheio caprese. Sem glúten e sem lactose.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540547/picture/small/221004133057",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540547/picture/medium/221004133057",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540547/picture/large/221004133057",
      },
      suggestions: [],
      version: "221004133057",
      prices: [{ name: "", price: 20, code: "18015" }],
      price_tag: 20,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 8631993,
      name: "Tapioca queijo e tomate",
      description:
        "Tapioca com queijo zero lactose e rodelinhas de tomate.\r\nSem glúten e sem lactose.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8640452/picture/small/221011202856",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8640452/picture/medium/221011202856",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8640452/picture/large/221011202856",
      },
      suggestions: [],
      version: "221011202856",
      prices: [{ name: "", price: 11, code: "18019" }],
      price_tag: 11,
      min_price_flag: false,
    },
    {
      group_id: 1220299,
      limit_age: false,
      group_name: "Sanduíches",
      id: 8632004,
      name: "Tapioca ovos e cogumelo",
      description:
        "Tapioca recheada com ovos mexidos, queijo zero lactose, cogumelo e alho poró. \r\nSem glúten e sem lactose.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8640464/picture/small/221011202851",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8640464/picture/medium/221011202851",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8640464/picture/large/221011202851",
      },
      suggestions: [],
      version: "221011202851",
      prices: [{ name: "", price: 14, code: "18020" }],
      price_tag: 14,
      min_price_flag: false,
    },
    {
      group_id: 1220300,
      limit_age: false,
      group_name: "Quentinhos",
      id: 7533705,
      name: "Escondidinho de aipim orgânico com carne de sol",
      description:
        "Sem glúten e sem lactose. Acompanha saladinha de alface, tomate cereja, cenoura, maçã e gergelim.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540550/picture/small/221025154927",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540550/picture/medium/221025154927",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540550/picture/large/221025154927",
      },
      suggestions: [],
      version: "221025154927",
      prices: [{ name: "", price: 26, code: "220" }],
      price_tag: 26,
      min_price_flag: false,
    },
    {
      group_id: 1220300,
      limit_age: false,
      group_name: "Quentinhos",
      id: 7533706,
      name: "Escondidinho de aipim orgânico com cogumelo",
      description:
        "Sem glúten. Acompanha salada de alface, tomate cereja, cenoura, maçã e gergelim.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540551/picture/small/221007143641",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540551/picture/medium/221007143641",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540551/picture/large/221007143641",
      },
      suggestions: [],
      version: "221007143641",
      prices: [{ name: "", price: 26, code: "221" }],
      price_tag: 26,
      min_price_flag: false,
    },
    {
      group_id: 1220300,
      limit_age: false,
      group_name: "Quentinhos",
      id: 7533707,
      name: "Strogonoff de frango com purê batata",
      description:
        "Strogonoff de frango com champignon, purê batata inglesa e batata palha. Sem glúten e sem lactose. Acompanha salada de alface, tomate cereja, cenoura, maçã e gergelim.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540552/picture/small/221007143656",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540552/picture/medium/221007143656",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540552/picture/large/221007143656",
      },
      suggestions: [],
      version: "221007143656",
      prices: [{ name: "", price: 24, code: "215" }],
      price_tag: 24,
      min_price_flag: false,
    },
    {
      group_id: 1220300,
      limit_age: false,
      group_name: "Quentinhos",
      id: 7533708,
      name: "Polenta com ragu de ossobuco",
      description:
        "Sem glúten e sem lactose. Acompanha salada de alface, tomate cereja, cenoura, maçã e gergelim.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540553/picture/small/221025154932",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540553/picture/medium/221025154932",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540553/picture/large/221025154932",
      },
      suggestions: [],
      version: "221025154932",
      prices: [{ name: "", price: 27, code: "222" }],
      price_tag: 27,
      min_price_flag: false,
    },
    {
      group_id: 1220300,
      limit_age: false,
      group_name: "Quentinhos",
      id: 7705380,
      name: "Ovos mexidos ",
      description:
        "Ovos orgânicos mexidos com salsinha e cebolinha, queijo zero lactose, tomate cereja e torradinha sem glúten e sem lactose.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7712466/picture/small/220920174813",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7712466/picture/medium/220920174813",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7712466/picture/large/220920174813",
      },
      suggestions: [],
      version: "220920174813",
      prices: [{ name: "", price: 18, code: "216" }],
      price_tag: 18,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7533658,
      name: "Água sem gás",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540503/picture/small/220702183637",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540503/picture/medium/220702183637",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540503/picture/large/220702183637",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 4.5, code: "13014" }],
      price_tag: 4.5,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7533659,
      name: "Água com gás",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540504/picture/small/221013143428",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540504/picture/medium/221013143428",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540504/picture/large/221013143428",
      },
      suggestions: [],
      version: "221013143428",
      prices: [{ name: "", price: 5, code: "10013" }],
      price_tag: 5,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7533660,
      name: "Suco de laranja",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540505/picture/small/220726162618",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540505/picture/medium/220726162618",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540505/picture/large/220726162618",
      },
      suggestions: [],
      version: "220726162618",
      prices: [{ name: "", price: 9, code: "13015" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7533661,
      name: "Suco de limão",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540506/picture/small/220827125014",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540506/picture/medium/220827125014",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540506/picture/large/220827125014",
      },
      suggestions: [],
      version: "220827125014",
      prices: [{ name: "", price: 9, code: "13040" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7773415,
      name: "Suco integral de Uva",
      description: "Sem açúcar e sem conservantes.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7780589/picture/small/220930160538",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7780589/picture/medium/220930160538",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7780589/picture/large/220930160538",
      },
      suggestions: [],
      version: "220930160538",
      prices: [{ name: "", price: 7, code: "13041" }],
      price_tag: 7,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7533663,
      name: "Coca-Cola",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540508/picture/small/220702183637",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540508/picture/medium/220702183637",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540508/picture/large/220702183637",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 7, code: "13017" }],
      price_tag: 7,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7533664,
      name: "Coca-Cola Zero Açúcar",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540509/picture/small/220702183637",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540509/picture/medium/220702183637",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540509/picture/large/220702183637",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 7, code: "13018" }],
      price_tag: 7,
      min_price_flag: false,
    },
    {
      group_id: 1220293,
      limit_age: false,
      group_name: "Para refrescar",
      id: 7533665,
      name: "Soda italiana",
      description: "Xarope saborizado e água com gás.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540510/picture/small/220908204345",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540510/picture/medium/220908204345",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540510/picture/large/220908204345",
      },
      suggestions: [],
      version: "220908204345",
      prices: [
        { name: "Maçã verde", price: 9.5, code: "13019" },
        { name: "Framboesa", price: 9.5, code: "13020" },
        { name: "Amora", price: 9.5, code: "13023" },
        { name: "Lichia", price: 9.5, code: "13025" },
        { name: "Mirtilo", price: 9.5, code: "13022" },
        { name: "Limão Siciliano", price: 9.5, code: "13021" },
        { name: "Morango", price: 9.5, code: "13038" },
      ],
      price_tag: 9.5,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533681,
      name: "Espresso",
      description:
        " Feito com grão gourmet 100% arábica moído na hora.\r\nNotas do café: frutas secas, chocolate ao leite, amêndoas, nozes.\r\n",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540526/picture/small/220722213738",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540526/picture/medium/220722213738",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540526/picture/large/220722213738",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 6, code: "1006" }],
      price_tag: 6,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533682,
      name: "Espresso pequeno com leite",
      description:
        " Feito com grão gourmet 100% arábica moído na hora.\r\nNotas do café: frutas secas, chocolate ao leite, amêndoas, nozes.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540527/picture/small/220726202318",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540527/picture/medium/220726202318",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540527/picture/large/220726202318",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 6.5, code: "1007" }],
      price_tag: 6.5,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533683,
      name: "Espresso médio",
      description:
        "Feito com grão gourmet 100% arábica moído na hora.\r\nNotas do café: frutas secas, chocolate ao leite, amêndoas, nozes.\r\nNotas do café: frutas secas, chocolate ao leite, amêndoas, nozes.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540528/picture/small/220722213746",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540528/picture/medium/220722213746",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540528/picture/large/220722213746",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 8, code: "1008" }],
      price_tag: 8,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533684,
      name: "Espresso médio com leite",
      description:
        "Feito com grão gourmet 100% arábica moído na hora.\r\nNotas do café: frutas secas, chocolate ao leite, amêndoas, nozes.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540529/picture/small/220827123850",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540529/picture/medium/220827123850",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540529/picture/large/220827123850",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 8.5, code: "1009" }],
      price_tag: 8.5,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533685,
      name: "Capuccino ",
      description: "Nosso capuccino é mais adocicado.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540530/picture/small/220728212849",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540530/picture/medium/220728212849",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540530/picture/large/220728212849",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 9.5, code: "1010" }],
      price_tag: 9.5,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533686,
      name: "Chocolate quente",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540531/picture/small/220611190647",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540531/picture/medium/220611190647",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540531/picture/large/220611190647",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 9.5, code: "1011" }],
      price_tag: 9.5,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533687,
      name: "Café Callebaut",
      description: "Café com leite e chocolate belga.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540532/picture/small/220611194151",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540532/picture/medium/220611194151",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540532/picture/large/220611194151",
      },
      suggestions: [],
      version: "220611194151",
      prices: [{ name: "", price: 15, code: "1012" }],
      price_tag: 15,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533688,
      name: "NesPINK",
      description:
        "O gostinho de infância da bebida láctea feita a base de Nesquik.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540533/picture/small/221025141030",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540533/picture/medium/221025141030",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540533/picture/large/221025141030",
      },
      suggestions: [],
      version: "221025141030",
      prices: [{ name: "", price: 9, code: "1023" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533689,
      name: "Café passado na hora",
      description:
        "Feito com grão especial 100% arábica  moído na hora exclusivo da Confeitos e Afetos.\r\nA Hario V60 não é um porta filtro comum, ele promove uma xícara de café passado limpo e saboroso. Seu design permite que o café absorva água pelo tempo necessário, tendo um resultado aromático e com sabor incrível.\r\nPara uma xícara grande - 250ml.  \r\nNotas: Abacaxi, limão, milho e pamonha.\r\nPontuação: 87\r\n",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540534/picture/small/220923153137",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540534/picture/medium/220923153137",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540534/picture/large/220923153137",
      },
      suggestions: [],
      version: "220923153137",
      prices: [{ name: "", price: 9, code: "1014" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533690,
      name: "Café passado na hora para 3 xícaras",
      description:
        "Feito com grão especial 100% arábica  moído na hora exclusivo da Confeitos e Afetos.\r\nA Hario V60 não é um porta filtro comum, ele promove uma xícara de café passado limpo e saboroso. Seu design permite que o café absorva água pelo tempo necessário, tendo um resultado aromático e com sabor incrível.\r\nNotas: Abacaxi, limão, milho e pamonha.\r\nPontuação: 87\r\n\r\n",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540535/picture/small/220923153135",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540535/picture/medium/220923153135",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540535/picture/large/220923153135",
      },
      suggestions: [],
      version: "220923153135",
      prices: [{ name: "", price: 27, code: "1016" }],
      price_tag: 27,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7533691,
      name: "Prensa francesa - 300ml ",
      description:
        "A prensa francesa permite uma fusão mais densa entre a água e o café moído e permite que os óleos e sedimentos naturais cheguem até à sua xícara.\r\nNeste método, utilizamos um dos dois cafés 100% arábica:\r\n\r\nOrgânico\r\nNotas do café orgânico: doce figo, doce de leite, cacau nibs.\r\nPontuação 86\r\n\r\nEspecial\r\nNotas do café especial: laranja, pêssego, tangerina, capim limão e floral. \r\nPontuação: 88\r\n",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540536/picture/small/220923153135",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540536/picture/medium/220923153135",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540536/picture/large/220923153135",
      },
      suggestions: [],
      version: "220923153135",
      prices: [{ name: "", price: 16, code: "1017" }],
      price_tag: 16,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7710842,
      name: "Espresso pequeno descafeinado ",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7717934/picture/small/220923140012",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7717934/picture/medium/220923140012",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7717934/picture/large/220923140012",
      },
      suggestions: [],
      version: "220923140012",
      prices: [{ name: "", price: 8, code: "1022" }],
      price_tag: 8,
      min_price_flag: false,
    },
    {
      group_id: 1220297,
      limit_age: false,
      group_name: "Café não costuma falhar",
      id: 7690774,
      name: "Espresso médio descafeinado ",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7697840/picture/small/220923140012",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7697840/picture/medium/220923140012",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7697840/picture/large/220923140012",
      },
      suggestions: [],
      version: "220923140012",
      prices: [{ name: "", price: 9, code: "1020" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220296,
      limit_age: false,
      group_name: "Chás de felicidade",
      id: 7533677,
      name: "Alegria",
      description:
        "Chá misto de maça, hibisco, capim-limão, laranja, cranberry e pimenta malagueta. Essa infusão deliciosa promete colorir até os dias mais cinzas e inspirar sorrisos em cada xícara de chá. ",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540522/picture/small/220824192814",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540522/picture/medium/220824192814",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540522/picture/large/220824192814",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 9, code: "1002" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220296,
      limit_age: false,
      group_name: "Chás de felicidade",
      id: 7533678,
      name: "Doce sonho",
      description:
        "Chá misto de maça com camomila e canela. Uma combinação feita para trazer a melhor noite de sono. Uma infusão aromática, alegre e relaxante para você dormir bem.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540523/picture/small/220824192811",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540523/picture/medium/220824192811",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540523/picture/large/220824192811",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 9, code: "1003" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220296,
      limit_age: false,
      group_name: "Chás de felicidade",
      id: 7533680,
      name: "Florada",
      description:
        "Chá misto de chá verde com jasmim. Um buquê de jasmim que vai perfumar o seu coração. É um chá para quem busca um blend clássico chinês com um toque contemporâneo delicioso.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540525/picture/small/220824192811",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540525/picture/medium/220824192811",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540525/picture/large/220824192811",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 9, code: "1004" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220296,
      limit_age: false,
      group_name: "Chás de felicidade",
      id: 7533679,
      name: "Chai dos Sonhos",
      description:
        "Chá misto de chá preto, canela, gengibre, cravo, pimenta preta e cardamomo. Inspirado no verdadeiro chai indiano, é uma bebida feita com leite e açúcar mascavo. Um blend aromático, completo e delicioso . É perfeito como nos sonhos!",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540524/picture/small/221028173217",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540524/picture/medium/221028173217",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540524/picture/large/221028173217",
      },
      suggestions: [],
      version: "221028173217",
      prices: [{ name: "", price: 9, code: "1005" }],
      price_tag: 9,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7533666,
      name: "Baby Chandon Réserve Brut",
      description: "",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540511/picture/small/221026172249",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540511/picture/medium/221026172249",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540511/picture/large/221026172249",
      },
      suggestions: [],
      version: "221026172249",
      prices: [{ name: "", price: 42, code: "11002" }],
      price_tag: 42,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7533667,
      name: "Baby Chandon Passion Rosé",
      description:
        "Chandon Passion tem uma personalidade única e intensa, com notas de maracujá, pêssego, lichia, acrescidas de toques de rosas; e uma cor rosada inconfundível. Um aperitivo atraente, especialmente quando servido com gelo.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540512/picture/small/221027151929",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540512/picture/medium/221027151929",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540512/picture/large/221027151929",
      },
      suggestions: [],
      version: "221027151929",
      prices: [{ name: "", price: 45, code: "11003" }],
      price_tag: 45,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7533669,
      name: "Mimosa",
      description: "Espumante e suco fresco de laranja - Leve, frutado",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540514/picture/small/221027151933",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540514/picture/medium/221027151933",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540514/picture/large/221027151933",
      },
      suggestions: [],
      version: "221027151933",
      prices: [{ name: "", price: 28, code: "11010" }],
      price_tag: 28,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7533668,
      name: "Cerveja Stannis",
      description:
        "A Stannis Pilsner é uma cerveja refrescante, um pouco mais amarga que as pilsens que vemos por aí. A Stannis Pilsner tem intenso sabor maltado, IBU 15 e 4,6% de teor alcoólico com toda a qualidade dos nobres lúpulos alemães que vão em sua receita.\r\n\r\nA Gold Amelia é uma Belgian Blonde Ale com aroma de ameixa e damasco que vão tomar conta do seu paladar. É Uma cerveja complexa, clara e encorpada com IBU 12. Ao aproximar a taça da boca, você vai sentir a efervescência do seu corpo denso e cremoso. A Gold Amélia foi ganhadora de vários prêmios, entre eles, foi eleita a melhor cerveja do mundo, sendo medalhista de ouro no International Beer Challenge (2019) e bronze na Australian International Beer Awards (2019).",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540513/picture/small/221022174749",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540513/picture/medium/221022174749",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540513/picture/large/221022174749",
      },
      suggestions: [],
      version: "221022174749",
      prices: [{ name: "Pilsner", price: 12, code: "11001" }],
      price_tag: 12,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7533671,
      name: "Gin tônica ",
      description:
        "Gin Tanqueray com tônica Wiwe e uma rodela de limão siciliano.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540516/picture/small/220618143910",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540516/picture/medium/220618143910",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540516/picture/large/220618143910",
      },
      suggestions: [],
      version: "220618143910",
      prices: [{ name: "", price: 26, code: "11004" }],
      price_tag: 26,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7533672,
      name: "Gin tônica Rosé",
      description: "Gin Tanqueray com tônica Rosé  Wiwe.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540517/picture/small/220618143910",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540517/picture/medium/220618143910",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540517/picture/large/220618143910",
      },
      suggestions: [],
      version: "220618143910",
      prices: [{ name: "", price: 26, code: "11005" }],
      price_tag: 26,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7533674,
      name: "Vinho Rosé Piscine",
      description:
        "Lançado em 2004, o Rosé Piscine é produzido a partir de uma uva autóctone do sudoeste da França: a Negrette. Com um aroma sedutor e maior concentração de açúcar, exige o consumo com gelo para se atingir o equilíbrio e torna o Rosé Piscine uma bebida charmosa e refrescante.",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540519/picture/small/221026172307",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540519/picture/medium/221026172307",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7540519/picture/large/221026172307",
      },
      suggestions: [],
      version: "221026172307",
      prices: [{ name: "", price: 98, code: "11006" }],
      price_tag: 98,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: true,
      group_name: "Bebidas alcoólicas",
      id: 7634347,
      name: "Vinho Verde Casal Garcia",
      description:
        "No aroma apresenta notas de frutas cítricas e florais. Na boca é leve, frutado ligeiramente efervescente e muito refrescante.\r\n\r\nAbriu o vinho e não tomou tudo!? Leve a garrafa para a sua casa!!! :)",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641330/picture/small/220524212259",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641330/picture/medium/220524212259",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/7641330/picture/large/220524212259",
      },
      suggestions: [],
      version: "220827123850",
      prices: [{ name: "", price: 85, code: "11007" }],
      price_tag: 85,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: false,
      group_name: "Bebidas alcoólicas",
      id: 8142403,
      name: "Vinho Tinto A Mare Primitivo Puglia ",
      description:
        "Oferece aromas de frutas vermelhas e pretas maduras, como ameixas, framboesas e cerejas, notas de especiarias e toques de baunilha e chocolate. Já em boca, bastante fruta preta, groselha e amoras. Ainda apresenta taninos maduros e uma acidez super equilibrada.\r\n\r\nUva: Primitivo\r\nPaís: Itália\r\n\r\nAbriu o vinho e não tomou tudo!? Leve a garrafa para a sua casa!!! :)",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150085/picture/small/220706125227",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150085/picture/medium/220706125227",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150085/picture/large/220706125227",
      },
      suggestions: [],
      version: "220706125227",
      prices: [{ name: "", price: 120, code: "11015" }],
      price_tag: 120,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: false,
      group_name: "Bebidas alcoólicas",
      id: 8142406,
      name: "Vinho tinto Miguel Torres Andica Gran Reserva ",
      description:
        "Vinho100% orgânicos (com certificação).\r\nEm taça, é de cor vermelho cereja bem escuro e apresenta notas de frutas vermelhas e pretas bem maduras, como cereja, framboesas, amora e ameixas, além de aromas florais muito sedutores.  Já em boca os aromas se confirmam, mesclados a um final de notas balsâmicas e especiarias picantes. Elegante e com fruta madura em abundância, acidez extremamente refrescante e taninos aveludados, este tinto tem um final prolongado e persistente.\r\n\r\nUva:  Carmenère \r\nPaís: Chile\r\n\r\nAbriu o vinho e não tomou tudo!? Leve a garrafa para a sua casa!!! :)",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150088/picture/small/220706125220",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150088/picture/medium/220706125220",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150088/picture/large/220706125220",
      },
      suggestions: [],
      version: "220706125220",
      prices: [{ name: "", price: 105, code: "11014" }],
      price_tag: 105,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: false,
      group_name: "Bebidas alcoólicas",
      id: 8142407,
      name: "Vinho rosé  Le Petit Cochonnet Grenache",
      description:
        "Leve, refrescante, frutado e com boa acidez. \r\nUva: Grenache (100%)\r\nRegião/País: Languedoc-Roussillon/França\r\n\r\nAbriu o vinho e não tomou tudo!? Leve a garrafa para a sua casa!!! :)",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150089/picture/small/220921171455",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150089/picture/medium/220921171455",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150089/picture/large/220921171455",
      },
      suggestions: [],
      version: "220921171455",
      prices: [{ name: "", price: 114, code: "11013" }],
      price_tag: 114,
      min_price_flag: false,
    },
    {
      group_id: 1220294,
      limit_age: false,
      group_name: "Bebidas alcoólicas",
      id: 8142410,
      name: "Vinho verde Bico Amarelo",
      description:
        "Límpido e cor citrina claro. Aromas florais e frutados bem combinados e equilibrados, próprios da combinação das castas Alvarinho, Loureiro e Avesso. Excelente corpo, sabor macio, com alguma frescura e um final de boca muito frutado e persistente.\r\nUvas: 20% Alvarinho, 60% Loureiro, 20% Avesso\r\nRegião / País: Região dos Vinhos Verdes - Portugal \r\n\r\nAbriu o vinho e não tomou tudo!? Leve a garrafa para a sua casa!!! :)",
      images: {
        small:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150092/picture/small/220921171451",
        medium:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150092/picture/medium/220921171451",
        large:
          "https://www.goomer.app/webmenu/confeitos-e-afetos/product/8150092/picture/large/220921171451",
      },
      suggestions: [],
      version: "220921171451",
      prices: [{ name: "", price: 105, code: "11012" }],
      price_tag: 105,
      min_price_flag: false,
    },
  ],
}

export const ImportFromGoomer = () => {
  const [place, setPlace] = useState<types.CreatePlaceInput>()
  const [goomerLink, setGoomerLink] = useState("")
  const [creating, setCreating] = useState(false)
  const history = useHistory()

  const importFromGoomer = async () => {
    // const { settings } = await fetch(goomerInfoUrl(goomerLink)).then(res => res.json())
    // const menu = await fetch(settings.mm_onsite_menu_url).then(res => res.json())

    const groups = getGroups(menu.products)

    const newPlace: types.CreatePlaceInput = {
      name: settings.name,
      category: settings.specialty_name,
      menu: groups,
    }
    setPlace(place)

    await API.graphql({
      query: createPlace,
      variables: { input: newPlace },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })
    history.go(0)
  }

  const didClickImportFromGoomer = () => {
    setCreating(true)
    importFromGoomer().then(() => setCreating(false))
  }

  // https://confeitos-e-afetos.goomer.app/
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Comece agora</IonCardTitle>
        <IonCardSubtitle>
          Importe seus dados do Goomer e comece a usar
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonLabel position="stacked">Digite seu link Goomer</IonLabel>
        <IonInput
          onIonInput={(e: any) => setGoomerLink(e.target.value)}
          placeholder="Ex: https://sualoja.goomer.app/"
          clearInput
        />
        <IonButton
          disabled={creating}
          expand="block"
          onClick={didClickImportFromGoomer}
        >
          Importar
        </IonButton>
      </IonCardContent>
    </IonCard>
  )
}
