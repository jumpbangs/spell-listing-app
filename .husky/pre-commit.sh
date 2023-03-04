#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo '🏗️👷 Styling,linting and building your project before committing'

# Format to Check Prettier standards
npx run lint
npx run format 