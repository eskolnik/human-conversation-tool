require "sinatra"
require "sinatra/json"
require "json"
require "pry"

CURRENT_FILE_PATH = File.dirname(__FILE__)

before do
  headers({ "Access-Control-Allow-Origin" => "*" })
end

get "/greetings.json" do
  status 200
  greetings = parsed_messages_json_data["greetings"]
  json greetings.sample
end

get "/responses.json" do
  status 200
  responses = parsed_messages_json_data["responses"]
  json responses.sample
end

def parsed_messages_json_data
  data = File.read(CURRENT_FILE_PATH + "/messages.json")
  JSON.parse(data)
end
