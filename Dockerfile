FROM node:16-alpine as builder

WORKDIR /app
COPY JobHunt/* ./

ARG APP_ENV=stage
ENV APP_ENV ${APP_ENV}

RUN ls -la

RUN if [ ${APP_ENV} = "stage" ]; then \
    mv .env.staging .env \
;fi

RUN if [ ${APP_ENV} = "production" ]; then \
    mv .env.production .env \
;fi

RUN rm -f .env.staging .env.production

RUN cat .env

# Build project
RUN yarn --pure-lockfile
RUN yarn run build


FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]