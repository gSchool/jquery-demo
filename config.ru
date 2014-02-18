use Rack::Static, :urls => ["/public"]

run ->(env) do
  body = File.read(File.expand_path("../index.html", __FILE__))
  [200, {}, [body]]
end