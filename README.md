# django-typescript
Generate TypeScript types from django framework using Opan Api 3

Generate openapi schema in django
```
cd server
python3 manage.py generateschema > openapi-schema.yml
```

Generate .d.ts schema for TypeScript from openapi schema
```
npm run types:generate
```

<img width="827" alt="image" src="https://user-images.githubusercontent.com/19593179/62821965-69b0a080-bb7d-11e9-8db2-c9027f6e36f2.png">
