# encoding: UTF-8
#\ -w -p 2323
require 'rack/mime'
use Rack::ContentLength

class Rack::Directory

    
    alias_method :old_each, :each
    def each(&block)
      @files.map! do |arr|
        arr.map do |i|
           #URI.escape i.encode('UTF-8')
           i
        end
      end
      old_each &block
    end
end

app = Rack::Directory.new Dir.pwd
run app