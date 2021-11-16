#!/bin/sh
NODE_ENV=production yarn run db:migrate
exec "$@"
