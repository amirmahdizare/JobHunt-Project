FROM node:16-alpine as builder

WORKDIR /app
COPY JobHunt ./

# Build project
RUN yarn --pure-lockfile
RUN yarn run build


FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]