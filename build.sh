#! /usr/bin/env -S bash -eu
# -S makes it so the rest of the command is treated as a single arg, not more 'env -v' args
# -eu makes bash error on undefined $VARIABLEs and exit on any non-zero exit code

# Use tsconfig.json for config
npx tsc
