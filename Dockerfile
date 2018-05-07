FROM nginx:stable as base

COPY index.html /usr/share/nginx/html/
COPY dist/* /usr/share/nginx/html/dist/

EXPOSE 80 8080

CMD ["nginx", "-g", "daemon off;"]


FROM nginx:stable-alpine

COPY --from=base /usr/share/nginx/html/ /usr/share/nginx/html/
