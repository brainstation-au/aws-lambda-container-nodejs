FROM public.ecr.aws/lambda/nodejs:20

# Copy function code
COPY dist ${LAMBDA_TASK_ROOT}/dist
COPY package.json package-lock.json  ${LAMBDA_TASK_ROOT}

# Install NPM dependencies for function
RUN npm install --omit=dev

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
# CMD [ "dist/addition.handler" ]
