## WAREHOUSE API Documentation

## 1. AUTH
**REGISTER**
METHOD: **POST**
URL: {{BASE_URL}}/auth/signup
PAYLOAD/BODY:
```json
{
  "email": "test@gmail.com", 
  "user_name": "test",
  "password": "123456" //min 6 character
}
```

RESPONSE(SUCCESS):
```json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWY5NTJjYmNlMWEwOTkzMWRmZjQ0YSIsImlhdCI6MTczODUxMTY2MCwiZXhwIjoxNzM4NTk4MDYwfQ.sNcPmFa0prgjN5dQtW99xghmpF8zdQV6Anl8DSAfRcU"
    }
```

**LOGIN**
METHOD: **POST**
URL: {{BASE_URL}}/auth/login
PAYLOAD/BODY:
```json
{
  "user_name": "test",
  "password": "123456" //min 6 character
}
```

RESPONSE(SUCCESS):
```json
   {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWY3NDM3Nzc0MzgyOTM5YmVlZGQ3NiIsImlhdCI6MTczODUxMTcyOSwiZXhwIjoxNzM4NTk4MTI5fQ.jEFjRdCHfcP87zF3N5WJPWzBIKUkcvfneyM_en5y7Ac"
}
```


## 2. PRODUCT BRAND
**GET ALL**
METHOD: **GET**
URL: {{BASE_URL}}/product-brand
PAYLOAD/BODY: -
RESPONSE(SUCCESS):
```json

{
    "data": [
        
        {
            "_id": "679f87c04ece4e4d2be67b15",
            "brand_name": "Laptop Advance terbaru baru keluar",
            "brand_code": "LL-001",
            "price": 10000000,
            "description": "Laptop dengan keanehan yang dimilikinya",
            "uom": "PCS",
            "is_delete": false,
            "createdAt": "2025-02-02T14:57:04.106Z",
            "updatedAt": "2025-02-02T14:57:04.106Z",
            "__v": 0
        },
        {
            "_id": "679f87c44ece4e4d2be67b18",
            "brand_name": "Laptop Advance terbaru baru keluar",
            "brand_code": "LL-001",
            "price": 10000000,
            "description": "Laptop dengan keanehan yang dimilikinya",
            "uom": "PCS",
            "is_delete": false,
            "createdAt": "2025-02-02T14:57:08.507Z",
            "updatedAt": "2025-02-02T14:57:08.507Z",
            "__v": 0
        }
    ],
    "totalCount": 2
}

```

**FIND BY ID**
METHOD: **GET**
URL: {{BASE_URL}}/product-brand/679f87c04ece4e4d2be67b15
PAYLOAD/BODY: -
RESPONSE(SUCCESS):
```json

        
        {
            "_id": "679f87c04ece4e4d2be67b15",
            "brand_name": "Laptop Advance terbaru baru keluar",
            "brand_code": "LL-001",
            "price": 10000000,
            "description": "Laptop dengan keanehan yang dimilikinya",
            "uom": "PCS",
            "is_delete": false,
            "createdAt": "2025-02-02T14:57:04.106Z",
            "updatedAt": "2025-02-02T14:57:04.106Z",
            "__v": 0
        },
        

```

**CREATE PRODUCT BRAND**
METHOD: **POST**
URL: {{BASE_URL}}/product-brand
PAYLOAD/BODY: 
```json
{
    "brand_name": "Laptop Advance terbaru baru keluar",
    "brand_code": "LL-001",
    "price": 10000000,
    "description": "Laptop dengan keanehan yang dimilikinya",
    "uom": "PCS"
}
```
RESPONSE(SUCCESS):
```json

        
        {
            "_id": "679f87c04ece4e4d2be67b15",
            "brand_name": "Laptop Advance terbaru baru keluar",
            "brand_code": "LL-001",
            "price": 10000000,
            "description": "Laptop dengan keanehan yang dimilikinya",
            "uom": "PCS",
            "is_delete": false,
            "createdAt": "2025-02-02T14:57:04.106Z",
            "updatedAt": "2025-02-02T14:57:04.106Z",
            "__v": 0
        },
        

```

**UPDATE PRODUCT BRAND**
METHOD: **PATCH**
URL: {{BASE_URL}}/product-brand
PAYLOAD/BODY: 
```json
{
    "brand_name": "Laptop Advance terbaru baru keluar broo",
    "brand_code": "LL-001",
    "price": 10000000,
    "description": "Laptop dengan keanehan yang dimilikinya",
    "uom": "PCS"
}
```
RESPONSE(SUCCESS):
```json

        
        {
            "_id": "679f87c04ece4e4d2be67b15",
            "brand_name": "Laptop Advance terbaru baru keluar broo",
            "brand_code": "LL-001",
            "price": 10000000,
            "description": "Laptop dengan keanehan yang dimilikinya",
            "uom": "PCS",
            "is_delete": false,
            "createdAt": "2025-02-02T14:57:04.106Z",
            "updatedAt": "2025-02-02T14:57:04.106Z",
            "__v": 0
        },
        

```

**DELETE PRODUCT BRAND**
METHOD: **DELETE**
URL: {{BASE_URL}}/product-brand/{id}
PAYLOAD/BODY: -
RESPONSE(SUCCESS):
```json        
{
    "message": "Product Brand successfully deleted",
    "data": {
        "_id": "679f5b6042a227760930edc4",
        "brand_name": "Laptop Advance Diskon",
        "brand_code": "LL-001",
        "price": 10000000,
        "description": "Laptop dengan keanehan yang dimilikinya",
        "uom": "PCS",
        "is_delete": true,
        "createdAt": "2025-02-02T11:47:44.457Z",
        "updatedAt": "2025-02-02T16:05:01.073Z",
        "__v": 0
    }
}
        
```


