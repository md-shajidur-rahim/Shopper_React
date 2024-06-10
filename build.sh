cd backend; mkdir public;
cd ../frontend; npm run build; cp -r build/* ../backend/public/
cd ../admin; npm run build; cp -r dist ../backend/public/