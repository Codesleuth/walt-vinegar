# Base
FROM nginx:stable-alpine as base

COPY index.html /usr/share/nginx/html/
COPY dist/* /usr/share/nginx/html/dist/

# Production
FROM nginx:stable-alpine

COPY --from=base /usr/share/nginx/html/ /usr/share/nginx/html/
