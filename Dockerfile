FROM nginx:stable-alpine

COPY index.html /usr/share/nginx/html/
COPY dist/* /usr/share/nginx/html/dist/

EXPOSE 80 8080

CMD ["nginx", "-g", "daemon off;"]
