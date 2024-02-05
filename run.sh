#!/usr/bin/env bash

root=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "$root/client"
npm run dev

cd "$root/server"
npm run dev